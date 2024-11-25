    import User from "@/models/User";
    import connect from "@/utils/db";
    import bcrypt from "bcryptjs";
    import { NextResponse } from "next/server";


    export const POST = async (request) => {
        const { email, newpassword} = await request.json();

        await connect();

        try {
            const user = await User.findOne({ email });
            if (!user) {
                return NextResponse.json({
                    success: false,
                    message: "Email does not exist",
                }, { status: 404 });
            }

            const salt = await bcrypt.genSalt(10);
            const newHashPassword = await bcrypt.hash(newpassword, salt);

            await User.findByIdAndUpdate(user._id, { password: newHashPassword });

            return NextResponse.json({
                success: true,
                message: "Password reset successfully",
            }, { status: 201 });
        } catch (error) {
            console.error(error);
            return NextResponse.json({
                success: false,
                message: "An error occurred while resetting the password",
            }, { status: 500 });
        }
    };






