import mongoose from "mongoose";

export const connectDB = async () => {
	await mongoose
		.connect(
			"mongodb+srv://voyage_foodApp_19it463:Qxh3RemdmdWG2zwl@cluster0.ij3wgwi.mongodb.net/food-del"
		)
		.then(() => console.log("DB Connected"));
};
