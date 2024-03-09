"use server";

export async function getProduct(id) {
    const res = await fetch(`http://localhost:3000/product/api?id=${id}`, {
        next: { revalidate: 30 },
    });
    const data = await res.json();
    return JSON.parse(data);
}

