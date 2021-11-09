export default function DateFormatter({ dateString }) {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString();
}
