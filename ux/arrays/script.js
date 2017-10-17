 // data to work with
    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    const age15 = inventors.filter(item => item.year >= 1500 && item.year < 1600);
    console.log("century 15:");
    console.table(age15);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names

    const fullnames = inventors.map(item => `${item.first} ${item.last}`);
    console.log("Inventor's fullname");
    console.log(fullnames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    console.log('ordered by year:');
    console.table(ordered);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, item) => {return total + (item.passed - item.year);}, 0);
    console.log("total years of all inventors = ", totalYears);

    // 5. Sort the inventors by years lived
    const theOldest = inventors.sort((a, b) => {
              const last = a.passed - a.year;
              const next = b.passed - b.year;
              return last > next ? -1 : 1;
            });
    console.table(theOldest);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    //url https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//    const category = document.querySelector('.mw-category');
//    //const links = Array.from(category.querySelectorAll('a'));
//    const links = [...category.querySelectorAll('a')];
//    //const de = links.map(link => link.textContent);
//    const de = links
//                    .map(link => link.textContent)
//                    .filter(street => street.includes('de'));
//    "Boulevard de l'Amiral-Bruix"
//    "Boulevard des Capucines"
//    "Boulevard de la Chapelle"
//    "Boulevard de Clichy"
//    "Boulevard de l'Hôpital"
//    "Boulevard des Italiens"
//    "Boulevard de la Madeleine"
//    "Boulevard de Magenta"
//    "Boulevard de Rochechouart"
//    "Boulevard de Sébastopol"
//    "Boulevard de Strasbourg"
//    "Boulevard de la Zone"


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const abc = people.sort( (a, b) => {
              let [a1, b1] = a.split(', ');
              let [a2, b2] = b.split(', ');
              return a1 > a2 ? 1 : -1;
            });
    console.log(abc);


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transport = data.reduce((obj, item) => {
      if (!obj[item]) obj[item] = 0;
      obj[item]++;
      return obj;
    }, {});
    console.log(transport);

 // ## Array 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?
    const curYear = (new Date()).getFullYear();
    const isAdult = people.some(item => {
            return (curYear - item.year >= 19);
            });
    console.log({isAdult});
    const allAdult = people.every(item => {
              return (curYear - item.year >= 19);
    });
    console.log({allAdult});
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    console.table(comments);
    const comment = comments.find(item => item.id === 823423);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(item => item.id === 823423);
    console.log(index);
    const newComments = [
             ...comments.slice(0, index),
            ...comments.slice(index + 1)
    ];
    console.table(newComments);