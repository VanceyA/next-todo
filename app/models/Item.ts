
import { Document, Schema, model, models } from "mongoose";

export interface IItem extends Document {
    name: string;
    description: string;
}

const ItemSchema: Schema = new Schema({
    name: {
        type: String
    },
    isDone: {
        type: Boolean
    }
});

const Item = models.Item || model<IItem>("Item", ItemSchema);

export default Item;