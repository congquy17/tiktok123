import * as request from '~/utils/request';
export const search = async (q, type = 'less') => {
    {
        try {
            const res = await request.get('users/search', {
                params: {
                    q,
                    type
                }
            });
            return res.data;
        } catch (error) {
            console.log(console.error());
        }
    }
};
export const content = async (q, type = 'less') => {
    {
        try {
            const res = await request.get('users/content', {
                params: {
                    q,
                    type
                }
            });
            return res.data;
        } catch (error) {
            console.log(console.error());
        }
    }
};
