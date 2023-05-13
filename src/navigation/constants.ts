export const Stacks = {
    COUNTER: 'COUNTER_STACK' as const,
    POSTS: 'POSTS_STACK' as const,
};

export const Screens = {
    Counter: {
        MAIN: 'COUNTER_MAIN_SCREEN' as const,
    },
    Posts: {
        MAIN: 'POSTS_MAIN_SCREEN' as const,
        POST: 'POSTS_POST_SCREEN' as const,
    },
};
