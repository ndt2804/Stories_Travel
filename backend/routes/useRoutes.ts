
import { Express } from 'express';
import userRoute from './user.route';
import homeRoue from './home.route';

function useRoutes(app: Express) {
    // Add other routes if needed
    app.use('/api/user', userRoute);
    app.use('/', homeRoue);
}

export default useRoutes;