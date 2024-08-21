import { getProductsByIds } from '@/server/BL/productService';
import { connectToMongo } from '@/server/DL/connectToMongo';

// הפונקציה שתטפל בבקשת ה-POST
export async function POST(req, res) {
    await connectToMongo();

    const body = await req.json();
    const { ids } = body;
    if (!ids || ids.length === 0) {
        return new Response(JSON.stringify({ error: 'No product IDs provided' }), { status: 400 });
    }

    try {
        const products = await getProductsByIds(ids);
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
    }
}
