import {useMemo} from "react";

export const getTotalPage = (limit, totalPosts) => {
    return Math.ceil(totalPosts /  limit)
}