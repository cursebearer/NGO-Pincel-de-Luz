import PostConnection from "/scripts/admin/api/PostConnection.js";

export async function deletePost(id) {
    await PostConnection.deletePost(id);
    window.location.reload();
}