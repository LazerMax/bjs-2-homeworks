/*function cachingDecoratorNew(func) {
    let cache = {};
    return (...args) => {
        const hash = args.join(',');
        if (hash in cache) {
            return ("Из кэша: " + cache[hash]);
        } let newCache = {};
        if (Object.keys(cache).length === 5) {
            delete cache[Object.keys(cache)[0]];
        }
        const result = func(...args);
        cache[hash] = result;
        return ("Вычисляем: " + result);
    }
}*/

function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
            return "Из кэша: " + objectInCache.value;
        }

        let result = func(...args);
        
        cache.push({hash: hash, value: result});
        
        if (cache.length > 5) {
        cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}


function debounceDecoratorNew(func, delay) {
    wrapper.count = 0;
    wrapper.allCount = 0;
    let timeoutId = null;
     function wrapper(...args) {
         ++wrapper.allCount;
         clearTimeout(timeoutId);
         console.log(wrapper.allCount);
        if (timeoutId === null) {
            func(...args);
            ++wrapper.count;
            console.log(wrapper.count);

        }
         timeoutId = setTimeout(() => {
             func(...args);
             ++wrapper.count;
         }, delay);
    }
    return wrapper;
}