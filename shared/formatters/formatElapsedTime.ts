import { formatDate } from "./formatDate";

export const formatElapsedTime = (date: string) => {
  const reviewDate = new Date(date);
  const now = new Date();
  const diffInMs = now.getTime() - reviewDate.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);

  if (diffInHours > 24) {
    return formatDate(date);
  } else {
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    if (diffInMinutes < 60) {
      return `Il y a ${diffInMinutes} minutes`;
    } else {
      const diffInHoursRounded = Math.floor(diffInHours);
      return `Il y a ${diffInHoursRounded} heures`;
    }
  }
};
