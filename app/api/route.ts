import {products} from "@/data"

export async function GET(request: Request) {
    return Response.json(JSON.stringify(products));
  }

  