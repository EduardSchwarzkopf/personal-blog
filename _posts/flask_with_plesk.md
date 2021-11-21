---
title: "Flask with Plesk"
excerpt: "I wanted to install my flask app on my plesk server. This was not as easy as I initially expected, so I am recording my steps here so that this might help someone else if necessary."
date: "2020-01-26"
---

I wanted to install my flask app on my plesk server. This was not as easy as I initially expected, so I am recording my steps here so that this might help someone else if necessary.

In the first step, make sure you have nginx installed. You can find instructions [here](https://support.plesk.com/hc/en-us/articles/213944825-How-to-install-and-enable-nginx-reverse-proxy-on-a-Plesk-for-Linux-server).

## Hosting settings

Make sure to have the following settings **turned off** under domain > Hosting & DNS > Hosting Settings

```
- PHP-Unterstützung
- CGI-Unterstützung
- Perl-Unterstützung
- CGIPython-Unterstützung
- FastCGI-Unterstützung
```

## Apache & nginx settings

1. Disable all options under **nginx settings**
2. hit apply
3. under **Additional nginx directives** add the following:

(maybe change the port on localhost to your desired value)

```
proxy_read_timeout 300s;
proxy_connect_timeout 75s;

location / {
	proxy_pass http://localhost:8000;

	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

	client_max_body_size 5M;
}
```

4. hit save

## Installing gunicorn as a service

Connect to your server via SSH and type in the following command

`sudo nano /etc/systemd/system/gunicorn.service`

and paste the following into the file:

(again you may want to change the port at localhost)

```
[Unit]
#  specifies metadata and dependencies
Description=Gunicorn instance to serve my Flask App
After=network.target

# tells the init system to only start this after the networking target has been reached
# We will give our regular user account ownership of the process since it owns all of the relevant files
[Service]
# Service specify the user and group under which our process will run.
User=username

# give group ownership to the www-data group so that Nginx can communicate easily with the Gunicorn processes.
Group=psacln

# We'll then map out the working directory and set the PATH environmental variable so that the init system knows where our the executables for the process are locat$
WorkingDirectory=/PATH/TO/FLASK-APP
Environment="PATH=/PATH/TO/venv/bin"

# We'll then specify the commanded to start the service
ExecStart=/PATH/TO/venv/bin/gunicorn -w 4 -b localhost:8000 myapp:app



# This will tell systemd what to link this service to if we enable it to start at boot. We want this service to start when the regular multi-user system is up and r$
[Install]
WantedBy=multi-user.target
```

hit **ctrl + x** and confirm both times with enter

in the next step you will need to reload daemon and enable your gunicon service with:

```
sudo systemctl daemon-reload
sudo systemctl start gunicorn.service
sudo systemctl enable gunicorn.service
```

## Usefull resouces

- <https://medium.com/@mosenturm/nginx-als-proxy-server-für-gunicorn-unter-plesk-einrichten-ca2f30f54fef>
- <https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-18-04>
