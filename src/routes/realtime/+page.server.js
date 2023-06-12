
export const ssr = false;

export const actions = {
    thumbup: async ({locals,request})=>{
        const form = await request.formData();

        const likes = form.get('likes')?? '';
        const id = form.get('id')??'';


        const data={
            likes: parseInt(likes) + 1
        }
        await locals.pb.collection('posts').update(id, data);


    },
    thumbdown: async ({locals,request})=>{
        const form = await request.formData();

        const dislikes = form.get('dislikes')?? '';
        const id = form.get('id')??'';

        const data={
            dislikes: parseInt(dislikes) + 1
        }
        await locals.pb.collection('posts').update(id, data);
    },
}