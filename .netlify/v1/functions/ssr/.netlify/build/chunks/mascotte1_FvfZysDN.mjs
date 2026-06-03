const mascotte1 = new Proxy({"src":"/_astro/mascotte1.BTsQhrNG.avif","width":498,"height":525,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/marti/Documents/GitHub/projet-co-s2-2026-projet-01-gestons/src/assets/img/mascotte1.avif";
							}
							
							return target[name];
						}
					});

export { mascotte1 as m };
