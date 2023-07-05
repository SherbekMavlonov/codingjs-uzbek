module.exports = [
  {
    question: '1 va undan katta n soni berilgan, sonning faktorialini qaytaring: n * (n-1) * (n-2) ... 1. Natijani rekursiv xisoblang (takrorlash operatorisiz)',
    title: 'Recursion-1',
    name: 'factorial',
    inputs: [
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(6)",
      "(7)",
      "(8)",
      "(12)"
    ]
  },
  {
    question: "Bizda bir nechta quyon bor va har bir quyonning ikkita katta qulog'i bor. Biz barcha quyonlarning quloqlarini umumiy sonini rekursiv ravishda (tsikl yoki ko'paytirishsiz) hisoblamoqchimiz.",
    title: 'Recursion-1',
    name: 'bunnyEars',
    inputs: [
      "(0)",
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(12)",
      "(50)",
      "(234)"
    ]
  },
  {
    question: "Fibonachchi ketma-ketligi matematikaning mashhur qismidir va uning rekursiv ta'rifi bor. Ketma ketlikdagi birinchi ikkita qiymat 0 va 1 (asosan shu 2 ta holat). Qolgan har bir keyingi qiymat oldingi ikkita qiymatning yig'indisidir, shuning uchun butun ketma-ketlik quyidagicha ko'rinishda bo'ladi: 0, 1, 1, 2, 3, 5, 8, 13, 21... Fibonachchi n-sonini qaytaruvchi rekursiv Fibonachchi(n) usulini aniqlang, n=0 ketma-ketlikning boshlanishini bildiradi.",
    title: 'Recursion-1',
    name: 'fibonacci',
    inputs: [
      "(0)",
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(6)",
      "(7)"
    ]
  },
  {
    question: "Bir qatorda turgan quyonlarimiz bor, 1, 2, ... Toq quyonlarning (1, 3, ..) oddiy 2 ta quloqlari bor. Juft quyonlarning (2, 4, ..) 3 ta qulog'i bor, deymiz, chunki ularning har birining oyog'i ko'tarilgan. Bunny qatoridagi 'quloqlar' sonini 1, 2, ... n (looplar yoki ko'paytirishsiz) takroriy ravishda qaytaring.",
    title: 'Recursion-1',
    name: 'bunnyEars2',
    inputs: [
      "(0)",
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(6)",
      "(10)"
    ]
  },
  {
    question: "Bizda bloklardan yasalgan uchburchak bor. Eng yuqori qatorda 1 ta blok, keyingi qatorda 2 ta blok, keyingi qatorda 3 ta blok bor va hokazo. Berilgan qatorlar soni bilan bunday uchburchakdagi bloklarning umumiy sonini rekursiv (loop yoki ko'paytmasiz) hisoblang.",
    title: 'Recursion-1',
    name: 'triangle',
    inputs: [
      "(0)",
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)",
      "(6)",
      "(7)"
    ]
  },
  {
    question: "Manfiy bo'lmagan int n berilgan, uning raqamlari yig'indisini rekursiv ravishda qaytaring (looplarsiz). E'tibor bering, mod (%) 10 yozilganda o'ngdagi oxirgi raqamni beradi(126 % 10 - 6), floorga bo'linishi (Math.floor(n/10)) 10 ga bo'linsa, eng o'ngdagi raqamni olib tashlaydi [Math.floor(126/10) 12 ga teng].",
    title: 'Recursion-1',
    name: 'sumDigits1',
    inputs: [
      "(126)",
      "(49)",
      "(12)",
      "(10)",
      "(1)",
      "(0)",
      "(730)",
      "(1111)",
      "(11111)",
      "(10110)",
      "(235)"
    ]
  },
  {
    question: "Manfiy bo'lmagan int n berilgan, sonda 7 raqami nechi marta takrorlanganini aniqlang, shuning uchun masalan, 717 -> 2 ni beradi (loopsiz). E'tibor bering, mod (%) 10 yozilganda o'ngdagi oxirgi raqamni beradi (126 % 10 - 6), floorga bo'linishi (Math.floor(n/10)) 10 ga bo'lsa, o'ngdagi oxirgi raqamni olib tashlaydi [Math.floor(126/10) 12 ga teng].",
    title: 'Recursion-1',
    name: 'count7',
    inputs: [
      "(717)",
      "(7)",
      "(123)",
      "(77)",
      "(7123)",
      "(771237)",
      "(771737)",
      "(47571)",
      "(777777)",
      "(70701277)",
      "(777576197)",
      "(99999)",
      "(99799)"
    ]
  },
  {
    question: "Manfiy bo'lmagan int n berilgan, raqam sifatida 8 ning paydo bo'lish sonini rekursiv (loopsiz) hisoblang, bundan tashqari agar 2 ta 8 bir ketma ket kelsa 8 ikki barobar ko'payadi, shuning uchun 8818 -> 4 hosil qiladi. Mod(%) 10 ga eng o'ngdagi raqamni beradi (126 % 10 -> 6 ga teng), floorga bo'linish esa (Math.floor(n / 10)) eng o'ngdagi raqamni olib tashlaydi [Math.floor(126/10) 12].",
    title: 'Recursion-1',
    name: 'count8',
    inputs: [
      "(8)",
      "(818)",
      "(8818)",
      "(8088)",
      "(123)",
      "(81238)",
      "(88788)",
      "(8234)",
      "(2348)",
      "(23884)",
      "(0)",
      "(1818188)",
      "(8818181)",
      "(1080)",
      "(188)",
      "(88888)",
      "(9898)",
      "(78)"
    ]
  },
  {
    question: "base va n ning ikkalasi ham 1 yoki undan katta bo'lsa, basening qiymatini n darajaga (loopsiz) rekursiv hisoblang, shuning uchun quvvatN(3, 2) 9 (chunki 3 ning kvadrati -> 9 ga teng) bo'ladi.",
    title: 'Recursion-1',
    name: 'powerN',
    inputs: [
      "(3, 1)",
      "(3, 2)",
      "(3, 3)",
      "(2, 1)",
      "(2, 2)",
      "(2, 3)",
      "(2, 4)",
      "(2, 5)",
      "(10, 1)",
      "(10, 2)",
      "(10, 3)"
    ]
  },
  {
    question: "Satr berilgan, satrdagi kichik 'x' belgilar sonini rekursiv (loopsiz) hisoblang.",
    title: 'Recursion-1',
    name: 'countX',
    inputs: [
      "('xxhixx')",
      "('xhixhix')",
      "('hi')",
      "('h')",
      "('x')",
      "('')",
      "('hihi')",
      "('hiAAhi12hi')"
    ]
  },
  {
    question: "Satr berilgan, satrda kichik 'hi' necha marta takrorlanishini rekursiv (loopsiz) hisoblang.",
    title: 'Recursion-1',
    name: 'countHi',
    inputs: [
      "('xxhixx')",
      "('xhixhix')",
      "('hi')",
      "('hihih')",
      "('h')",
      "('')",
      "('ihihihihih')",
      "('ihihihihihi')",
      "('hiAAhi12hi')",
      "('xhixhxihihhhih')",
      "('ship')"
    ]
  },
  {
    question: "Satr berilgan, barcha kichik 'x' belgilarni 'y' belgilarga o'zgartirilgan yangi satrni qaytaring rekursiv ravishda (looplarsiz).",
    title: 'Recursion-1',
    name: 'changeXY',
    inputs: [
      "('codex')",
      "('xxhixx')",
      "('xhixhix')",
      "('hiy')",
      "('h')",
      "('x')",
      "('')",
      "('xxx')",
      "('yyhxyi')",
      "('hihi')"
    ]
  },
  {
    question: "Satr berilgan, 'pi' ning barcha ko'rinishlari '3.14' bilan almashtirilgan yangi satrni rekursiv (looplarsiz) hisoblang.",
    title: 'Recursion-1',
    name: 'changePi',
    inputs: [
      "('xpix')",
      "('pipi')",
      "('pip')",
      "('pi')",
      "('hip')",
      "('p')",
      "('x')",
      "('')",
      "('pixx')",
      "('xyzzy')"
    ]
  },
  {
    question: "Satr berilgan, barcha 'x' belgilari o'chirilgan yangi satrni qaytaring (rekursiv).",
    title: 'Recursion-1',
    name: 'noX',
    inputs: [
      "('xaxb')",
      "('abc')",
      "('xx')",
      "('')",
      "('axxbxx')",
      "('Hellox')"
    ]
  },
  {
    question: "Ints massivi berilgan, agar massivda 6 bo'lsa, true qaytaring aks holda false. Biz massivning faqat berilgan indeksdan boshlab ko'rib chiqamiz. (rekursiv)",
    title: 'Recursion-1',
    name: 'array6',
    inputs: [
      "([1, 6, 4], 0)",
      "([1, 4], 0)",
      "([6], 0)",
      "([], 0)",
      "([6, 2, 2], 0)",
      "([2, 5], 0)",
      "([1, 9, 4, 6, 6], 0)",
      "([2, 5, 6], 0)"
    ]
  },
  {
    question: "Ints massivi berilgan, 11 qiymati massivda necha marta paydo bo'lishini rekursiv hisoblang. Biz faqat massivning berilgan indeksdan boshlanadigan qismini hisobga olamiz.",
    title: 'Recursion-1',
    name: 'array11',
    inputs: [
      "([1, 2, 11], 0)",
      "([11, 11], 0)",
      "([1, 2, 3, 4], 0)",
      "([1, 11, 3, 11, 11], 0)",
      "([11], 0)",
      "([1], 0)",
      "([], 0)",
      "([11, 2, 3, 4, 11, 5], 0)",
      "([11, 5, 11], 0)"
    ]
  },
  {
    question: "Ints massivini hisobga olgan holda, agar massivda massivning biror qiymatidan keyin 10 ga ko'paytirilgan holatidagi qiymat kelsa, true qaytaring aks holda false. Biz massivning faqat berilgan indeksdan boshlanadigan qismini ko'rib chiqamiz.",
    title: 'Recursion-1',
    name: 'array220',
    inputs: [
      "([1, 2, 20], 0)",
      "([3, 30], 0)",
      "([3], 0)",
      "([], 0)",
      "([3, 3, 30, 4], 0)",
      "([2, 19, 4], 0)",
      "([20, 2, 21], 0)",
      "([20, 2, 21, 210], 0)",
      "([2, 200, 2000], 0)",
      "([0, 0], 0)",
      "([1, 2, 3, 4, 5, 6], 0)",
      "([1, 2, 3, 4, 5, 50, 6], 0)",
      "([1, 2, 3, 4, 5, 51, 6], 0)",
      "([1, 2, 3, 4, 4, 50, 500, 6], 0)"
    ]
  },
  {
    question: "Satr berilgan, barcha qo'shni belgilari '*' bilan ajratilgan yangi qatorni rekursiv ravishda qaytaring.",
    title: 'Recursion-1',
    name: 'allStar',
    inputs: [
      "('hello')",
      "('abc')",
      "('ab')",
      "('a')",
      "('')",
      "('3.14')",
      "('Chocolate')",
      "('1234')"
    ]
  },
  {
    question: "Satr berilgan, asl satrda qo'shni bo'lgan bir xil belgilar bir-biridan \"*\" belgisi bilan ajratilgan yangi satrni qaytaring (rekursiv).",
    title: 'Recursion-1',
    name: 'pairStar',
    inputs: [
      "('hello')",
      "('xxyy')",
      "('aaaa')",
      "('aaab')",
      "('aa')",
      "('a')",
      "('')",
      "('noadjacent')",
      "('abba')",
      "('abbba')"
    ]
  },
  {
    question: "Satr berilgan, barcha kichik \"x\" belgilar satr oxiriga ko'chirilgan yangi qatorni rekursiv ravishda qaytaring.",
    title: 'Recursion-1',
    name: 'endX',
    inputs: [
      "('xxre')",
      "('xxhixx')",
      "('xhixhix')",
      "('hiy')",
      "('h')",
      "('x')",
      "('xx')",
      "('')",
      "('bxx')",
      "('bxax')",
      "('axaxax')",
      "('xxhxi')"
    ]
  },
  {
    question: 'Satrda bitta harf bilan ajratilgan 2 ta bir xil harfni "Juftlik" deb ataymiz. Shunday qilib, "AxA" A juftligini hosil qiladi. Juftliklar bir-biriga mos kelishi mumkin, shuning uchun "AxAxA" 3 juftni o\'z ichiga oladi - A uchun 2 ta va x uchun 1 ta. Berilgan qatordagi juftlar sonini rekursiv hisoblang.',
    title: 'Recursion-1',
    name: 'countPairs',
    inputs: [
      "('axa')",
      "('axax')",
      "('axbx')",
      "('hi')",
      "('hihih')",
      "('ihihhh')",
      "('ihjxhh')",
      "('')",
      "('a')",
      "('aa')",
      "('aaa')"
    ]
  },
  {
    question: 'Berilgan satrda paydo bo\'ladigan "abc" va "aba" satrlarining umumiy sonini rekursiv hisoblang.',
    title: 'Recursion-1',
    name: 'countAbc',
    inputs: [
      "('abc')",
      "('abcxxabc')",
      "('abaxxaba')",
      "('ababc')",
      "('abxbc')",
      "('aaabc')",
      "('hello')",
      "('')",
      "('ab')",
      "('aba')",
      "('aca')",
      "('aaa')"
    ]
  },
  {
    question: 'Satr berilgan, satrdagi "11" lar sonini rekursiv(looplarsiz) hisoblang. "11" lar takrorlanmasligi kerak ya\'ni "111" -> da bitta "11" mavjud, (javob: 1).',
    title: 'Recursion-1',
    name: 'count11',
    inputs: [
      "('11abc11')",
      "('abc11x11x11')",
      "('111')",
      "('1111')",
      "('1')",
      "('')",
      "('hi')",
      "('11x111x1111')",
      "('1x111')",
      "('1Hello1')",
      "('Hello')"
    ]
  },
  {
    question: 'Satr berilgan, bir xil bo\'lgan qo\'shni belgilar bitta belgiga qisqartirilgan "tozalangan" qatorni rekursiv ravishda qaytaring. Shunday qilib, "yyzzza" -> "yza" ni beradi.',
    title: 'Recursion-1',
    name: 'stringClean',
    inputs: [
      "('yyzzza')",
      "('abbbcdd')",
      "('Hello')",
      "('XXabcYY')",
      "('112ab445')",
      "('Hello Bookkeeper')"
    ]
  },
  {
    question: 'Satr berilgan, "hi" kichik harflari qatorda necha marta takrorlanishini rekursiv ravishda hisoblang, biroq ularning oldida "x" belgisi bo\'lgan "hi" ni hisoblamang.',
    title: 'Recursion-1',
    name: 'countHi2',
    inputs: [
      "('ahixhi')",
      "('ahibhi')",
      "('xhixhi')",
      "('hixhi')",
      "('hixhhi')",
      "('hihihi')",
      "('hihihix')",
      "('xhihihix')",
      "('xxhi')",
      "('hixxhi')",
      "('hi')",
      "('xxxx')",
      "('h')",
      "('x')",
      "('')",
      "('Hellohi')"
    ]
  },
  {
    question: 'Tire(-) va yulduzchani(*) o\'z ichiga olgan qatorni hisobga olsak, faqat tire va yulduz va ularning ichida joylashgan belgilardan iborat yangi qatorni rekursiv hisoblang, shuning uchun "xyz-abc*123" -> "-abc*" ni hosil qiladi.',
    title: 'Recursion-1',
    name: 'starBit',
    inputs: [
      "('xyz,-abc*123')",
      "('x,-hello*')",
      "(',-xy*1')",
      "('not really ,-possible*')",
      "(',-abc*')",
      "(',-abc*xyz')",
      "(',-abc*x')",
      "(',-x*')",
      "(',-)*')",
      "('res ,-ipsa* loquitor')",
      "('hello,-not really*there')",
      "('ab,-ab*ab')"
    ]
  },
  {
    question: 'Satr berilgan, "(())" yoki "((()))" kabi nol yoki undan ko\'p qavslar juftligiga ega bo\'lsa, true qiymatini qaytaring. Taklif: birinchi va oxirgi belgilarni tekshiring va keyin ularning ichida nima borligini takrorlang.',
    title: 'Recursion-1',
    name: 'nestParen',
    inputs: [
      "('(())')",
      "('((()))')",
      "('(((x))')",
      "('((())')",
      "('((()()')",
      "('()')",
      "('')",
      "('(yy)')",
      "('(())')",
      "('(((y))')",
      "('((y)))')",
      "('((()))')",
      "('(())))')",
      "('((yy())))')",
      "('(((())))')"
    ]
  },
  {
    question: 'Satr va boʻsh boʻlmagan qator berilgan, satrlar bir-biriga oʻxshamasdan satrda qancha marta paydo boʻlishini rekursiv hisoblang. ("iiiijj", "ii") -> 2 ni beradi.',
    title: 'Recursion-1',
    name: 'strCount',
    inputs: [
      "('catcowcat', 'cat')",
      "('catcowcat', 'cow')",
      "('catcowcat', 'dog')",
      "('cacatcowcat', 'cat')",
      "('xyx', 'x')",
      "('iiiijj', 'i')",
      "('iiiijj', 'ii')",
      "('iiiijj', 'iii')",
      "('iiiijj', 'j')",
      "('iiiijj', 'jj')",
      "('aaabababab', 'ab')",
      "('aaabababab', 'aa')",
      "('aaabababab', 'a')",
      "('aaabababab', 'b')"
    ]
  },
  {
    question: 'Satr va boʻsh boʻlmagan qator berilgan, agar satrning biror joyda, ehtimol, bir-birining ustiga chiqqan holda, kamida n ta nusxasi paydo boʻlsa true qaytaring (rekursiv) N manfiy bo\'lmaydi.',
    title: 'Recursion-1',
    name: 'strCopies',
    inputs: [
      "('catcowcat', 'cat', 2)",
      "('catcowcat', 'cow', 2)",
      "('catcowcat', 'cow', 1)",
      "('iiijjj', 'i', 3)",
      "('iiijjj', 'i', 4)",
      "('iiijjj', 'ii', 2)",
      "('iiijjj', 'ii', 3)",
      "('iiijjj', 'x', 3)",
      "('iiijjj', 'x', 0)",
      "('iiiiij', 'iii', 3)",
      "('iiiiij', 'iii', 4)",
      "('ijiiiiij', 'iiii', 2)",
      "('ijiiiiij', 'iiii', 3)",
      "('dogcatdogcat', 'dog', 2)"
    ]
  },
  {
    question: "Satr va bo'sh bo'lmagan qator berilgan, 'sub' parametri bilan boshlanadigan va tugaydigan eng katta qatorni rekursiv tarzda hisoblang va uning uzunligini qaytaring.",
    title: 'Recursion-1',
    name: 'strDist',
    inputs: [
      "('catcowcat', 'cat')",
      "('catcowcat', 'cow')",
      "('cccatcowcatxx', 'cat')",
      "('abccatcowcatcatxyz', 'cat')",
      "('xyx', 'x')",
      "('xyx', 'y')",
      "('xyx', 'z')",
      "('z', 'z')",
      "('x', 'z')",
      "('', 'z')",
      "('hiHellohihihi', 'hi')",
      "('hiHellohihihi', 'hih')",
      "('hiHellohihihi', 'o')",
      "('hiHellohihihi', 'll')"
    ]
  }
];
