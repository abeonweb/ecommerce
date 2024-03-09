import { products } from "@/data"

export async function GET(request: Request) {
     if(request.url.includes("id")){
        const productId = request.url.split("id=")[1];
        const searchedProductIndex = products.findIndex((product) => product.id === productId)
        const next = searchedProductIndex + 1 < products.length ? products[searchedProductIndex + 1].id : null;
        const prev = searchedProductIndex - 1 >= 0 ? products[searchedProductIndex - 1].id : null;
        // return current object,and next, prev ids
        const values = {
            product: products[searchedProductIndex],
            next: next,
            prev: prev,
        }
        return Response.json(JSON.stringify(values))

    } else {
        const productId = request.url.split("related=")[1];
        const product = products.find((product) => product.id === productId);
        
        return Response.json(JSON.stringify(product));
    }
}

  