## گزارش تمرین اول برنامه‌سازی وب

### ساختار HTML
ابتدا یک فایل HTML ساختم و به توضیح بخش‌های مختلف آن می‌پردازم.
```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formula Calculator</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="main-content">
        <div class="container">
            <h1>Formula Calculator</h1>
            <input type="number" id="First" placeholder="First Number">
            <input type="number" id="Second" placeholder="Second Number">
            <input type="number" id="Third" placeholder="Third Number">
            <formula evaluator="First*Second+Third"></formula>
            <formula evaluator="(First-Third)*Second"></formula>
            <formula evaluator="First+Second*Third"></formula>
        </div>
    </div>

    <footer class="student-footer">
        <div class="footer-content">
            <span class="student-name">Amirhossein Mohammadpour</span>
            <span class="student-id">402170024</span>
        </div>
    </footer>
</body>
</html>



در تگ `<head>` مشخصات صفحه مانند عنوان، استانداردهای مورد استفاده، و فایل‌های `CSS` اضافه شده‌اند.

در قسمت `<body>` محتوای اصلی صفحه را تعیین کرده‌ام. قسمت‌هایی که داده در آن وارد می‌شود (تگ `<input>`) و همچنین فرمول‌ها (تگ `<formula>`) در این بخش قرار دارند. در نهایت، مشخصات نویسنده و فوتر صفحه را نیز تعیین کرده‌ام.

### عملکرد فایل جاوااسکریپت
در فایل جاوااسکریپت ابتدا توابع موردنیاز برای محاسبه فرمول‌ها و متغیرهای لازم را تعریف کرده‌ام.

سپس، مقدار اولیه ورودی‌ها را با استفاده از تابع `initInputs` مقداردهی کرده‌ام.  
برای اجرای محاسبات هنگام تغییر ورودی‌ها، از `eventListener` استفاده کرده‌ام.

در تابع `updateInput`، مقدار متناظر هر ورودی را بررسی کرده و در صورت عددی بودن مقداردهی انجام می‌شود. سپس، تمام فرمول‌ها مجدداً محاسبه می‌شوند.

با استفاده از تابع `evaluateFormula`، مقدار فرمول‌ها را محاسبه و نمایش می‌دهم.

در تابع `calculateExpression`، از ویژگی `evaluator` برای محاسبه فرمول‌ها استفاده کرده و مقادیر ورودی را جایگذاری می‌کنم تا محاسبه انجام شود.

### استایل‌دهی با `CSS`
برای استایل‌دهی از `CSS` استفاده کرده‌ام. تمام استایل‌های موردنیاز در این فایل نوشته شده‌اند. با استفاده از ویژگی‌هایی مانند `text-align: center`، محتوای صفحه را تنظیم کرده‌ام.

همچنین، برای نمایش ورودی‌ها به‌صورت ستونی و ریسپانسیو بودن صفحه اقداماتی انجام داده‌ام.

در بخش دیگری از فایل، رنگ متن، رنگ پس‌زمینه، فاصله از مرزها و سایر ویژگی‌های ظاهری را مشخص کرده‌ام.

