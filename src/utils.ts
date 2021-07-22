export const dateStr = (date: string): string =>
  date ? new Intl.DateTimeFormat('sv-SE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date)) : ""

export const dateIso = (date: string): string => 
  date ? (new Date(date)).toISOString() : ""
