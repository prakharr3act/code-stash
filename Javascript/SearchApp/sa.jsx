
useEffect(() => {
  if (query.trim() === '') {
    setResults([]);
    return;
  }

  const timeoutId = setTimeout(async () => {
    try {
      const response = await fetch(
        `https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`
      );

      const data = await response.json();

      setResults(data.map((fruit) => fruit.name));

    } catch (error) {
      console.error(error);
    }
  }, 700);

  return () => clearTimeout(timeoutId);

}, [query]);



