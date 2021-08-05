export const getCurrenDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1); //January is 0!
  let dd = String(today.getDate());
  let hari;
  if (dd === "1") hari = "Minggu";
  if (dd === "2") hari = "Senin";
  if (dd === "3") hari = "Selasa";
  if (dd === "4") hari = "Rabu";
  if (dd === "5") hari = "Kamis";
  if (dd === "6") hari = "Jum'at";
  if (dd === "7") hari = "Sabtu";
  return `${hari}, ${dd}-${mm}-${yyyy}`;
};
