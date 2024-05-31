import { fetchItems } from "../lib/data";

export default async function Page() {
    const items = await fetchItems();
    console.log(items)

    return (
        <div>
            <h1>Items</h1>
        </div>
    )
}