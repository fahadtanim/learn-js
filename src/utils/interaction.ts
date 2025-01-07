export function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget as HTMLDivElement;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = (y / rect.height - 0.5) * 30; // Scale rotation
  const rotateY = (x / rect.width - 0.5) * -30; // Scale rotation

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

export function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget as HTMLDivElement;
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}
