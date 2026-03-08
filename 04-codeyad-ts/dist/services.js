var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DATA_URL = "/04-codeyad-ts/data/index.json";
export const getPostService = () => {
    return fetch(DATA_URL);
};
export const getOnePostService = (postId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(DATA_URL);
        const posts = yield response.json();
        const selectedpost = posts.find((p) => p.id === postId);
        return selectedpost;
    }
    catch (error) {
        console.error("Error fetching post by ID:", error);
        return {
            ok: false,
            json: () => Promise.resolve({ error: `Failed to fetch data: ${error.message}` }),
        };
    }
});
//# sourceMappingURL=services.js.map