// Cookie Store API

// получить значение cookie
const cookie = await cookieStore.get("session_id");

// чтение всех файлов cookie
const cookie = await cookieStore.getAll();

// Обновить/установить значение cookie
await cookieStore.set({
    name: "opted_out",
    value: "1",
    expires: null,
    path: "/",
});
// или более коротко
await cookieStore.set("opted_out", "1");

// удалить cookie
await cookieStore.delete("session_id");

// мониторинг файлов cookie
cookieStore,addEventListener("change", event => {
    // вызовется на изменения cookie
});