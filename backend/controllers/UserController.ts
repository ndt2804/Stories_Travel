import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import bcrypt from 'bcrypt';


export async function registerUser(req: Request, res: Response) {
    try {
        const { name, email, password, image_url } = req.body;

        // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
        const existingUser: IUser | null = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'Người dùng đã tồn tại' });
        }

        // Mã hóa mật khẩu
        const hashedPassword: string = await bcrypt.hash(password, 10);

        // Tạo một đối tượng User mới
        const user: IUser = new User({ name, email, password: hashedPassword, image_url });

        // Lưu người dùng vào cơ sở dữ liệu
        await user.save();

        res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Đăng ký thất bại', error });
    }
};

export async function loginUser(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        // Tìm người dùng dựa trên email
        const user: IUser | null = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        // Kiểm tra mật khẩu
        const isPasswordValid: boolean = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mật khẩu không đúng' });
        }

        res.status(200).json({ message: 'Đăng nhập thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Đăng nhập thất bại', error });
    }
}