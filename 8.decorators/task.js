function cachingDecoratorNew(func) {
  let cache = {};
  return(...args) => {
      const hash = args.join(',');
      if (hash in cache) {
          return ("Из кэша: " + cache[hash]);
      }
      const result = func(...args);
      if(cache.length === 5){
          cache.shift();
      }
      cache[hash] = result;
      return ("Вычисляем: " + result);
  }
}


function debounceDecoratorNew(func, delay) {
     function wrapper(...args) {
         ++wrapper.count;
        let timeoutId = null;
        if (timeoutId === null) {
            timeoutId = setTimeout(() => {
                console.log(func(...args));
                ++wrapper.allCount;
                }, delay);
        } else{
            console.log(func(...args), delay);
        }
        wrapper.count = 0;
        wrapper.allCount = 0;
        return wrapper;
    }

}