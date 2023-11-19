const books = [
    {
        id: "_wnzd23udy",
        name: "In Search of Lost Time 1",
        description: "Con đường của Swann, phần đầu tiên của A la recherche de temps perdu, bộ bảy phần của Marcel Proust, được xuất bản năm 1913. Trong đó, Proust giới thiệu các chủ đề xuyên suốt toàn bộ tác phẩm. Người kể chuyện nhớ lại thời thơ ấu của mình với sự giúp đỡ của madeleine nổi tiếng; và mô tả niềm đam mê của M. Swann dành cho Odette. Công việc là không thể so sánh được. Edmund Wilson nói '[Proust] lần đầu tiên trong văn học đã cung cấp một kết quả tương đương ở quy mô đầy đủ cho lý thuyết mới của vật lý hiện đại.'",
        author: "Marcel Proust",
        photo: "https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL._SL160_.jpg"
    },
    {
        id: "_wmzd88udx",
        name: "Don Quixote",
        description: "Alonso Quixano, một quý ông miền quê đã nghỉ hưu ở độ tuổi 50, sống tại một khu vực không tên của La Mancha cùng với cháu gái và một người quản gia. Anh ta bị ám ảnh bởi những cuốn sách về tinh thần hiệp sĩ và tin rằng mọi lời nói của họ đều là sự thật, mặc dù thực tế là nhiều sự kiện trong đó rõ ràng là không thể xảy ra. Đối với những người khác, Quixano cuối cùng dường như bị mất trí vì ngủ ít, ăn ít và vì đọc quá nhiều.",
        author: "Miguel de Cervantes",
        photo: "https://images-na.ssl-images-amazon.com/images/I/41u9Jedk-mL._SL160_.jpg"
    },
    {
        id: "_xnzr29ido",
        name: "Ulysses",
        description: "Ulysses ghi lại hành trình của Leopold Bloom qua Dublin trong một ngày bình thường, ngày 16 tháng 6 năm 1904. Tiêu đề tương đồng và ám chỉ đến Odysseus (được Latinh hóa thành Ulysses), người anh hùng trong Odyssey của Homer (ví dụ: thư từ giữa Leopold Bloom và Odysseus, Molly Bloom và Penelope, Stephen Dedalus và Telemachus). Người hâm mộ Joyce trên toàn thế giới kỷ niệm ngày 16 tháng 6 là Ngày Bloomsday",
        author: "James Joyce",
        photo: "https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVwL._SL160_.jpg"
    },
    {
        id: "_abcv46uff",
        name: "The Great Gatsby",
        description: "Cuốn tiểu thuyết ghi lại một thời đại mà chính Fitzgerald gọi là 'Thời đại nhạc Jazz'. Sau cú sốc và hỗn loạn của Thế chiến thứ nhất, xã hội Mỹ đã đạt được mức độ thịnh vượng chưa từng có trong những năm 1920 'gầm rú' khi nền kinh tế tăng vọt. Đồng thời, Lệnh cấm, lệnh cấm bán và sản xuất rượu theo quy định của Tu chính án thứ mười tám, đã khiến các triệu phú trở thành những kẻ buôn lậu và dẫn đến sự gia tăng tội phạm có tổ chức, chẳng hạn như mafia Do Thái. Mặc dù Fitzgerald, giống như Nick Carraway trong tiểu thuyết của ông, thần tượng sự giàu có và hào nhoáng của thời đại, nhưng ông không thoải mái với chủ nghĩa vật chất không kiềm chế và sự thiếu đạo đức đi kèm với nó, một kiểu suy đồi.",
        author: "F. Scott Fitzgerald",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
    },
    {
        id: "_yyzd02udd",
        name: "Hamlet",
        description: "Bi kịch của Hamlet, Hoàng tử Đan Mạch, hay đơn giản hơn là Hamlet, là một bi kịch của William Shakespeare, được cho là được viết từ năm 1599 đến 1601. Vở kịch lấy bối cảnh ở Đan Mạch, kể lại việc Hoàng tử Hamlet trả thù chú Claudius của mình, người đã sát hại vua cha của Hamlet, rồi chiếm lấy ngai vàng và cưới Gertrude, mẹ của Hamlet. Vở kịch trình bày một cách sinh động diễn biến của sự điên loạn thực sự và giả vờ—từ đau buồn tột cùng đến cơn thịnh nộ sôi sục—và khám phá các chủ đề về phản bội, trả thù, loạn luân và băng hoại đạo đức.",
        author: "William Shakespeare",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
    },
    {
        id: "_onzp79uuu",
        name: "War and Peace",
        description: "Sử thi về quy mô, Chiến tranh và Hòa bình mô tả các sự kiện chi tiết bằng đồ họa dẫn đến cuộc xâm lược nước Nga của Napoléon và tác động của thời kỳ Napoléon đối với xã hội Sa hoàng, qua con mắt của năm gia đình quý tộc Nga",
        author: "Leo Tolstoy",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SL160_.jpg"
    },
    {
        id: "_obzd66urz",
        name: "The Odyssey",
        description: "Odyssey là một trong hai bài thơ sử thi Hy Lạp cổ đại lớn được cho là của Homer. Một phần, đây là phần tiếp theo của Iliad, tác phẩm khác theo truyền thống được cho là của Homer. Bài thơ là nền tảng của kinh điển phương Tây hiện đại. Quả thực đây là tác phẩm thứ hai - Iliad là tác phẩm đầu tiên - còn tồn tại của văn học phương Tây. Nó có lẽ được sáng tác vào gần cuối thế kỷ thứ 8 trước Công nguyên, ở đâu đó ở Ionia, vùng ven biển nói tiếng Hy Lạp mà ngày nay là Thổ Nhĩ Kỳ. Bài thơ chủ yếu tập trung vào người anh hùng Hy Lạp Odysseus (hay Ulysses, như ông được biết đến trong thần thoại La Mã) và chuyến hành trình dài về nhà của ông sau sự sụp đổ của thành Troy. Odysseus phải mất mười năm mới đến được Ithaca sau Cuộc chiến thành Troy kéo dài mười năm. Khi anh ta vắng mặt, người ta cho rằng anh ta đã chết, vợ anh ta là Penelope và con trai Telemachus phải đối phó với một nhóm những người cầu hôn ngỗ ngược, Mnesteres hoặc Proci, tranh giành quyền kết hôn của Penelope.",
        author: "Homer",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SL160_.jpg"
    },
    {
        id: "_opzd19yyy",
        name: "The Divine Comedy",
        description: "Thuộc nhóm bất hủ của những tác phẩm văn học vĩ đại, kiệt tác thơ ca của Dante Alighieri, Thần khúc, là một vở kịch cảm động về con người, một cuộc hành trình viễn tưởng khó quên xuyên qua sự dày vò vô tận của Địa ngục, lên những sườn dốc gian khổ của Luyện ngục và tiến tới cõi vinh quang. vương quốc Thiên đường - phạm vi hòa hợp phổ quát và sự cứu rỗi vĩnh cửu",
        author: "Dante Alighieri",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/61Ml8RHqxrL._SL160_.jpg"
    },
    {
        id: "_wfzd00udd",
        name: "The Brothers Karamazov",
        description: "Cuốn tiểu thuyết cuối cùng và vĩ đại nhất của Dostoevsky, Anh em nhà Karamazov, vừa là một câu chuyện tội phạm được kể xuất sắc vừa là một cuộc tranh luận triết học sôi nổi. Địa chủ phóng đãng Fyodor Pavlovich Karamazov bị sát hại; các con trai của ông - trí thức vô thần Ivan, Dmitry máu nóng và người mới thánh thiện Alyosha - đều có liên quan ở một mức độ nào đó. Gắn liền với bộ phim gia đình căng thẳng này là sự khám phá của Dostoevsky về nhiều ý tưởng sâu sắc về sự tồn tại của Chúa, câu hỏi về tự do của con người, bản chất chung của tội lỗi, hậu quả tai hại của chủ nghĩa duy lý. Cuốn tiểu thuyết cũng giàu tính hài hước: Nhà thờ Chính thống Nga, hệ thống pháp luật, và thậm chí cả những lý tưởng và niềm tin trân trọng nhất của tác giả đều được thể hiện bằng một nốt nhạc bất kính, đến nỗi tính chính thống và chủ nghĩa cấp tiến, sự tỉnh táo và điên rồ, tình yêu và hận thù, đúng và sai. không còn loại trừ lẫn nhau nữa. Rebecca West coi đó là câu chuyện ngụ ngôn về sự trưởng thành của thế giới nhưng đặt trẻ em lên hàng đầu. Bản dịch mới này thể hiện đầy đủ sự thiên tài của Dostoevsky, đặc biệt trong cách sử dụng lời nói, bao trùm mọi phương thức diễn đạt của con người.",
        author: "Fyodor Dostoyevsky",         
        photo: "http://ecx.images-amazon.com/images/I/51c4Gb6Uo0L._SL160_.jpg"
    },
    {
        id: "_nnzd69udd",
        name: "The Adventures of Huckleberry",
        description: "Được tất cả trẻ em trong thị trấn tôn kính và tất cả các bà mẹ ở đây khiếp sợ, Huckleberry Finn không thể chối cãi là nhân vật anh hùng nhí hấp dẫn nhất trong văn học Mỹ. Không giống như thế giới cổ tích, bình dị của Tom Sawyer, Những cuộc phiêu lưu của Huckleberry Finn có nền tảng vững chắc từ thực tế ban đầu. Từ người đàn ông say rượu bị bạo hành là cha của Huckleberry, đến lần đầu tiên Huck ngập ngừng vật lộn với các vấn đề về tự do cá nhân và những điều chưa biết, Huckleberry Finn nỗ lực tìm hiểu sâu hơn một chút về sự phức tạp - cả niềm vui lẫn bi kịch của cuộc sống",
        author: "Mark Twain",         
        photo: "http://ecx.images-amazon.com/images/I/51Ht1M-GPXL._SL160_.jpg"
    },
    {
        id: "_oezd03por",
        name: "The Iliad",
        description: "Iliad là một bài thơ sử thi bằng thể thơ lục giác dactylic, theo truyền thống được cho là của Homer. Lấy bối cảnh Cuộc chiến thành Troy, cuộc bao vây Ilium kéo dài 10 năm của liên minh các quốc gia Hy Lạp, phim kể về những trận chiến và sự kiện trong những tuần xảy ra cuộc cãi vã giữa Vua Agamemnon và chiến binh Achilles. Mặc dù câu chuyện chỉ kể vài tuần vào năm cuối cùng của cuộc chiến, Iliad vẫn đề cập hoặc ám chỉ đến nhiều truyền thuyết Hy Lạp về cuộc vây hãm. Cùng với Odyssey, cũng được cho là của Homer, Iliad là một trong những tác phẩm lâu đời nhất còn tồn tại của văn học phương Tây và phiên bản viết của nó thường có niên đại vào khoảng thế kỷ thứ 8 trước Công nguyên. Iliad chứa khoảng 15.700 dòng và được viết bằng hỗn hợp văn học của một số phương ngữ Hy Lạp. Quyền tác giả của bài thơ đang bị tranh chấp",
        author: "Homer",         
        photo: "http://ecx.images-amazon.com/images/I/512j6byhjvL._SL160_.jpg"
    },
    {
        id: "_wfpd93upe",
        name: "Alice's Adventures in Wonderland",
        description: "Năm 1862, Charles Lutwidge Dodgson, một nhà toán học nhút nhát mắc tật lắp bắp ở Oxford, đã tạo ra một câu chuyện về một cô bé rơi xuống hang thỏ. Thế là bắt đầu cuộc phiêu lưu bất tử của Alice, có lẽ là nữ anh hùng nổi tiếng nhất trong văn học Anh. Vô số học giả đã cố gắng xác định sức hấp dẫn của các cuốn sách Alice – với những nhân vật lập dị tuyệt vời như Nữ hoàng trái tim, Tweedledum và Tweedledee, Mèo Cheshire, Rùa giả, Thợ làm mũ điên và những người khác – bằng cách tuyên bố rằng chúng thực sự là một tác phẩm châm biếm về ngôn ngữ, một câu chuyện ngụ ngôn chính trị, một sự nhại lại văn học thiếu nhi thời Victoria, thậm chí là sự phản ánh lịch sử giáo hội đương thời. Có lẽ, như Dodgson có thể đã nói, Alice không gì khác hơn là một giấc mơ, một câu chuyện cổ tích về những thử thách và đau khổ khi lớn lên – hay thất bại, hoặc tất cả đều quay đầu lại – được nhìn qua con mắt chuyên gia của một đứa trẻ",
        author: "Lewis Carroll",         
        photo: "http://ecx.images-amazon.com/images/I/41h9Pz2qeIL._SL160_.jpg"
    },
    {
        id: "_wozd33zdf",
        name: "To the Lighthouse",
        description: "Là một cuốn tiểu thuyết mang tính bước ngoặt của chủ nghĩa hiện đại cao độ, văn bản tập trung vào gia đình Ramsay và những chuyến thăm của họ tới Isle of Skye ở Scotland từ năm 1910 đến năm 1920, khéo léo vận dụng thời gian và khám phá tâm lý. Cuốn tiểu thuyết có ít lời thoại và hầu như không có hành động; hầu hết nó được viết dưới dạng suy nghĩ và quan sát. Cuốn tiểu thuyết gợi lại sức mạnh của những cảm xúc thời thơ ấu và nêu bật sự vô thường của các mối quan hệ khi trưởng thành. Trong số nhiều câu chuyện và chủ đề của cuốn sách có những câu chuyện về sự mất mát, tính chủ quan và vấn đề về nhận thức.",
        author: "Virginia Woolf",         
        photo: "https://images-na.ssl-images-amazon.com/images/I/512RH0o4H2L._SL160_.jpg"
    }
]

const delay = 500;


const generatedID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

class BookApi {
    static getAllBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], books));
            }, delay);
        });
    }

    static saveBook(book) {
        book = Object.assign({}, book); 
        return new Promise((resolve) => {
            setTimeout(() => {
                if (book.id) {
                    const existingBookIndex = books.findIndex(a => a.id === book.id);
                    books.splice(existingBookIndex, 1, book);
                } else {
                    book.id = generatedID();
                    books.push(book);
                }
                resolve(book);
            }, delay);
        });
    }

    static getBook(bookId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingBookIndex = books.findIndex(book => book.id === bookId);
                const bookFound = Object.assign({}, books[existingBookIndex]);
                resolve(bookFound);
            }, delay);
        });
    }

    static deleteBook(bookId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfBookToDelete = books.findIndex(book => book.id === bookId);
                books.splice(indexOfBookToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default BookApi;