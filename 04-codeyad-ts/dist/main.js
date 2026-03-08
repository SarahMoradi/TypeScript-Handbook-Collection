var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getOnePostService, getPostService } from "./services.js";
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield getPostService();
    const posts = yield response.json();
    const rootElement = document.getElementById("root");
    if (rootElement && Array.isArray(posts) && posts[0]) {
        rootElement.innerHTML = posts[0].body;
    }
});
const getOnePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield getOnePostService(id);
    const rootElement = document.getElementById("root");
    if (rootElement) {
        rootElement.innerHTML = post.body;
    }
});
setTimeout(() => {
    getOnePost(201);
}, 1000);
setTimeout(() => {
    getPosts();
}, 1000);
//# sourceMappingURL=main.js.map