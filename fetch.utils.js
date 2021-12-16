const SUPABASE_URL = "https://ritiyenwzsalzpktroey.supabase.co"
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODg4NCwiZXhwIjoxOTU1MDg0ODg0fQ.Yn9Ken8agdL7K8NpTPyu81cBonK6zQDKTwIrFdY-xwM'
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(question, option_1,option_2, vote_1, vote_2) {
    const response = await client
        .from('polls')
        .insert([{
            question, 
            option_1,
            option_2,
            vote_1,
            vote_2
        }]);
    return response.data;
}

export async function getPolls() {
    const response = await client
        .from('polls')
        .select();
    return response.data;
}

export async function getUser() {
    return client.auth.session();
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('../');
}

export async function redirectToPolls() {
    if (await getUser()) {
        location.replace('./polls');
    }
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.data;
}

export async function signInUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    return response.data;
}

export async function logout() {
    await client.auth.sighOut();
    return window.location.href = '../';
}