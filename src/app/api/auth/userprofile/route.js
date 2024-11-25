    import User from "@/models/User";
    import connect from "@/utils/db";
    import bcrypt from "bcryptjs";
    import { NextResponse } from "next/server";


    export const POST = async (request) => {
        const { email, newrole} = await request.json();

        await connect();

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return NextResponse.json({
                    success: false,
                    message: "Email does not exist",
                }, { status: 404 });
            }

            const newChangeRole = await (newrole);

            await User.findByIdAndUpdate(user._id, { role: newChangeRole });

            return NextResponse.json({
                success: true,
                message: "User Role Update Successfully..!!",
            }, { status: 201 });
        } catch (error) {
            console.error(error);
            return NextResponse.json({
                success: false,
                message: "An error occurred while resetting the password",
            }, { status: 500 });
        }
    };






