import { unstable_noStore as noStore} from "next/cache";
import dbConnect from "./dbConnect";
import Item from "@/app/models/Item";

export async function fetchItems() {
    noStore();
    await dbConnect();
    try {
        const items = await Item.find({});
        console.log(items);
    } catch (error: any) {
        console.log(error.message);
    }
}