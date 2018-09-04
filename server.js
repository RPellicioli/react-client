const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/books', (req, res) => {
  res.send({ express: [{
    "author": "George R. R. Martin",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51AhGNhT04L._SY346_.jpg",
    "link": "https://www.amazon.com.br/Game-Thrones-Song-Fire-Book-ebook/dp/B004GJXQ20/",
    "pages": 694,
    "title": "A Game of Thrones",
    "subtitle": "A Song of Ice and Fire",
    "year": 1996,
    "price": 14.91,
    "description": "HBO’s hit series A GAME OF THRONES is based on George R. R. Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series.<br /> <br /> Summers span decades.Winter can last a lifetime.And the struggle for the Iron Throne has begun. <br /> <br /> As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand.His honour weighs him down at court where a true man does what he will, not what he must… and a dead enemy is a thing of beauty. <br /> <br /> The old gods have no power in the south, Stark’ s family is split and there is treachery at court.Worse, the vengeance - mad heir of the deposed Dragon King has grown to maturity in exile in the Free Cities.He claims the Iron Throne. "
}, {
    "author": "George R. R. Martin",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51ilVSflSkL.jpg",
    "link": "https://www.amazon.com.br/Clash-Kings-Song-Fire-Book-ebook/dp/B000FC1HBY/",
    "pages": 768,
    "title": "A Clash of Kings",
    "subtitle": "A Song of Ice and Fire",
    "year": 1998,
    "price": 7.5,
    "description": "A SONG OF ICE AND FIRE: BOOK TWO<br /> <br /> In this thrilling sequel to A Game of Thrones, George R.R.Martin has created a work of unsurpassed vision, power, and imagination.A Clash of Kings transports us to a world of revelry and revenge, wizardry and warfare unlike any we have ever experienced. <br /> <br /> A comet the color of blood and flame cuts across the sky.And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns.Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war.It is a tale in which brother plots against brother and the dead rise to walk in the night.Here a princess masquerades as an orphan boy; a knight of the mind prepares a poison for a treacherous sorceress; and wild men descend from the Mountains of the Moon to ravage the countryside.Against a backdrop of incest and fratricide, alchemy and murder, victory may go to the men and women possessed of the coldest steel...and the coldest hearts.For when kings clash, the whole land trembles. "
}, {
    "author": "George R. R. Martin",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51iROAKTByL.jpg",
    "link": "https://www.amazon.com.br/Storm-Swords-Song-Ice-Fire-ebook/dp/B004P1JEWU/",
    "pages": 973,
    "title": "A Storm of Swords",
    "subtitle": "A Song of Ice and Fire",
    "year": 2000,
    "price": 7.5,
    "description": "HBO’s hit series A GAME OF THRONES is based on George R. R. Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A STORM OF SWORDS is the third volume in the series.<br /> <br /> The Seven Kingdoms are divided by revolt and blood feud, and winter approaches like an angry beast.Beyond the Northern borders, wildlings leave their villages to gather in the ice and stone wasteland of the Frostfangs.From there, the renegade Brother Mance Rayder will lead them South towards the Wall. <br /> <br /> The men of the Night’ s Watch are ready for the coming of a great cold and the walking corpses that travel with it.But now they face a horde of wildlings twenty - thousand strong– hungry savage people steeped in the dark magic of the haunted wilderness– poised to invade the Kingdom of the North where Robb Stark wears his new - forged crown. <br /> <br /> But Robb’ s defences are ranged against attack from the South, the land of House Stark’ s enemies the Lannisters.His sisters are trapped there, dead or likely yet to die, at the whim of the Lannister boy - king Joffrey or his depraved mother Cersei, regent of the Iron Throne.Cersei’ s ambition is unfettered while the dwarf Tyrion Lannister fights for his life, a victim of treachery. <br /> <br /> And on the other side of the ocean, the last of the Targaryens rears the dragons she hatched from her husband’ s funeral pyre.Daenerys Stormborn will return to the land of her birth to avenge the murder of her father, the last Dragon King on the Iron Throne. "
}, {
    "author": "George R. R. Martin",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51T6kUoKSWL.jpg",
    "link": "https://www.amazon.com.br/Feast-Crows-Song-Fire-Book-ebook/dp/B000FCKGPC/",
    "pages": 753,
    "title": "A Feast for Crows",
    "subtitle": "A Song of Ice and Fire",
    "year": 2005,
    "price": 7.5,
    "description": "Few books have captivated the imagination and won the devotion and praise of readers and critics everywhere as has George R. R. Martin’s monumental epic cycle of high fantasy. Now, in A Feast for Crows, Martin delivers the long-awaited fourth book of his landmark series, as a kingdom torn asunder finds itself at last on the brink of peace . . . only to be launched on an even more terrifying course of destruction.<br /> <br /> A FEAST FOR CROWS <br /> <br /> It seems too good to be true.After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce.Or so it appears....With the death of the monstrous King Joffrey, Cersei is ruling as regent in King’ s Landing.Robb Stark’ s demise has broken the back of the Northern rebels, and his siblings are scattered throughout the kingdom like seeds on barren soil.Few legitimate claims to the once desperately sought Iron Throne still exist— or they are held in hands too weak or too distant to wield them effectively.The war, which raged out of control for so long, has burned itself out. <br /> <br /> But as in the aftermath of any climactic struggle, it is not long before the survivors, outlaws, renegades, and carrion eaters start to gather, picking over the bones of the dead and fighting for the spoils of the soon - to - be dead.Now in the Seven Kingdoms, as the human crows assemble over a banquet of ashes, daring new plots and dangerous new alliances are formed, while surprising faces— some familiar, others only just appearing— are seen emerging from an ominous twilight of past struggles and chaos to take up the challenges ahead. <br /> <br /> It is a time when the wise and the ambitious, the deceitful and the strong will acquire the skills, the power, and the magic to survive the stark and terrible times that lie before them.It is a time for nobles and commoners, soldiers and sorcerers, assassins and sages to come together and stake their fortunes...and their lives.For at a feast for crows, many are the guests— but only a few are the survivors. "
}, {
    "author": "George R. R. Martin",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51KFegQTQXL.jpg",
    "link": "https://www.amazon.com.br/Dance-Dragons-Song-Fire-Book-ebook/dp/B003YL4LYI/",
    "pages": 1040,
    "title": "A Dance with Dragons",
    "subtitle": "A Song of Ice and Fire",
    "year": 2011,
    "price": 7.5,
    "description": "#1 NEW YORK TIMES BESTSELLER • THE BOOK BEHIND THE FIFTH SEASON OF THE ACCLAIMED HBO SERIES GAME OF THRONES<br /> <br /> Don’ t miss the thrilling sneak peek of George R.R.Martin’ s A Song of Ice and Fire: Book Six, The Winds of Winter <br /> <br /> Dubbed“ the American Tolkien” by Time magazine, George R.R.Martin has earned international acclaim for his monumental cycle of epic fantasy.Now the #1 New York Times bestselling author delivers the fifth book in his landmark series—as both familiar faces and surprising new forces vie for a foothold in a fragmented empire. <br /> <br /> A DANCE WITH DRAGONS<br /> A SONG OF ICE AND FIRE: BOOK FIVE<br /> <br /> In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her. As they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind.<br /> <br /> Fleeing from Westeros with a price on his head, Tyrion Lannister, too, is making his way to Daenerys. But his newest allies in this quest are not the rag-tag band they seem, and at their heart lies one who could undo Daenerys’s claim to Westeros forever.<br /> <br /> Meanwhile, to the north lies the mammoth Wall of ice and stone—a structure only as strong as those guarding it. There, Jon Snow, 998th Lord Commander of the Night’s Watch, will face his greatest challenge. For he has powerful foes not only within the Watch but also beyond, in the land of the creatures of ice.<br /> <br /> From all corners, bitter conflicts reignite, intimate betrayals are perpetrated, and a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves, will face seemingly insurmountable obstacles. Some will fail, others will grow in the strength of darkness. But in a time of rising restlessness, the tides of destiny and politics will lead inevitably to the greatest dance of all.<br /> <br /> Praise for A Dance with Dragons<br /> <br /> “Filled with vividly rendered set pieces, unexpected turnings, assorted cliffhangers and moments of appalling cruelty, A Dance with Dragons is epic fantasy as it should be written: passionate, compelling, convincingly detailed and thoroughly imagined.”—The Washington Post<br /> <br /> “Long live George Martin . . . a literary dervish, enthralled by complicated characters and vivid language, and bursting with the wild vision of the very best tale tellers.”—The New York Times<br /> <br /> “One of the best series in the history of fantasy.”—Los Angeles Times "
}, {
    "author": "J. R. R. Tolkien",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41W%2BRH8kJgL.jpg",
    "link": "https://www.amazon.com.br/Fellowship-Ring-Lord-Rings-Book-ebook/dp/B002RI9THI/",
    "pages": 423,
    "title": "The Fellowship of the Ring",
    "subtitle": "Lord of the Rings",
    "year": 1954,
    "price": 26.79,
    "description": "Continuing the story begun in The Hobbit, this is the first part of Tolkien’s epic masterpiece, The Lord of the Rings, featuring the definitive text and a detailed map of Middle-earth.<br /> <br /> Sauron, the Dark Lord, has gathered to him all the Rings of Power– the means by which he intends to rule Middle - earth.All he lacks in his plans for dominion is the One Ring– the ring that rules them all– which has fallen into the hands of the hobbit, Bilbo Baggins. <br /> <br /> In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care.Frodo must leave his home and make a perilous journey across Middle - earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. <br /> <br /> J.R.R.Tolkien’ s great work of imaginative fiction has been labelled both a heroic romance and a classic fantasy fiction.By turns comic and homely, epic and diabolic, the narrative moves through countless changes of scene and character in an imaginary world which is totally convincing in its detail. "
}, {
    "author": "J. R. R. Tolkien",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41Pi4QuXuSL.jpg",
    "link": "https://www.amazon.com.br/Two-Towers-Lord-Rings-Book-ebook/dp/B002RI9QNK/",
    "pages": 352,
    "title": "The Two Towers",
    "subtitle": "Lord of the Rings",
    "year": 1954,
    "price": 26.27,
    "description": "Building the story begun in The Hobbit and continuing the adventures of The Fellowship of the Ring, this is the second part of Tolkien’s epic masterpiece, The Lord of the Rings, featuring the definitive text, hyperlinked footnotes and page references, and a detailed map of Middle-earth.<br /> <br /> Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom.They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria; and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force.While Frodo and Sam made their escape the rest of the company were attacked by Orcs. <br /> <br /> Now they continue their journey alone down the great River Anduin– alone, that is, save for the mysterious creeping figure that follows wherever they go. <br /> <br /> JRR Tolkien’ s great work of imaginative fiction has been labelled both a heroic romance and a classic fantasy fiction.By turns comic and homely, epic and diabolic, the narrative moves through countless changes of scene and character in an imaginary world which is totally convincing in its detail. "
}, {
    "author": "J. R. R. Tolkien",
    "image": "https://images-na.ssl-images-amazon.com/images/I/41fHC5yiRgL.jpg",
    "link": "https://www.amazon.com.br/Return-King-Lord-Rings-Book-ebook/dp/B002RIA062/",
    "pages": 416,
    "title": "The Return of the King",
    "subtitle": "Lord of the Rings",
    "year": 1955,
    "price": 20.79,
    "description": "Concluding the story of The Hobbit, this is the final part of Tolkien’s epic master piece.<br /> <br /> Impossible to describe in a few words, JRR Tolkien’ s great work of imaginative fiction has been labelled both a heroic romance and a classic fantasy fiction.By turns comic and homely, epic and diabolic, the narrative moves through countless changes of scene and character in an imaginary world which is totally convincing in its detail.Tolkien created a vast new mythology in an invented world which has proved timeless in its appeal. "
}] });
});

app.listen(port, () => console.log(`Listening on port ${port}`));