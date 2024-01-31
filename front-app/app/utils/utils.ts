export function addDays(date: Date, days: number): String {
  let result = new Date(date);
  result.setDate(date.getDate() + days);
  var year = result.toLocaleString("default", { year: "numeric" });
  var month = result.toLocaleString("default", { month: "2-digit" });
  var day = result.toLocaleString("default", { day: "2-digit" });
  return year + "-" + month + "-" + day;
}
