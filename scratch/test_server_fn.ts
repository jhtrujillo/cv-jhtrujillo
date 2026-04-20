import { getPosts } from "../src/lib/posts";

async function test() {
    try {
        console.log("Calling getPosts()...");
        // In server-side tests, we might need to mock some things, but let's try direct call
        const posts = await (getPosts as any)();
        console.log("Result:", posts);
    } catch (e: any) {
        console.error("Test failed:", e.message);
        console.error(e.stack);
    }
}

test();
