function cachingDecoratorNew(func) {
    let cache = {};
    return (...args) => {
        const hash = args.join(',');
        if (hash in cache) {
            return ("Из кэша: " + cache[hash]);
        } let newCache = {};
        if (Object.keys(cache).length === 5) {


            const keysToKeep = Object.keys(cache).filter(key => key != Object.keys(cache)[0]);
            console.log(keysToKeep);
            keysToKeep.forEach((key) => {
                newCache[key] = cache[key];
            });
            cache = {};
            keysToKeep.forEach((key) => {
                cache[key] = newCache[key];
            });
        }
        const result = func(...args);
        cache[hash] = result;
        return ("Вычисляем: " + result);
    }
}
/*function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item === hash);
        if (!objectInCache) { // если элемент не найден
            console.log("Из кэша: " + func(...args));
            return "Из кэша: " + func(...args);
        }

        let result = func(...args);
        cache.push(hash);
        if (cache.length > 5) {
        cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}*/


function debounceDecoratorNew(func, delay) {
    wrapper.count = 0;
    wrapper.allCount = 0;
     function wrapper(...args) {
         ++wrapper.allCount;
         console.log(wrapper.allCount);
        let timeoutId = null;
        if (timeoutId === null) {
            timeoutId = setTimeout(() => {
                func(...args);
                ++wrapper.count;
                }, delay);
            clearTimeout(timeoutId);
        } else {
            func(...args);
            ++wrapper.count;
            console.log(wrapper.count);
        }
    }
    return wrapper;
}