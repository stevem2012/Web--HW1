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
```

در تگ `head` خصوصیاتی که صفحه ما در پشت پرده باید داشته باشد را تعیین میکنیم. مثل اینکه مجموعه کاراکترهای از چه استانداردی استفاده میکند و یا اینکه عنوان صفحه در بالای مرورگر باید چه باشد. همچنین در همین قسمت فایل `css` و `javascript` را به فایل `html` وصل میکنیم.
در قسمت `body` محتوای اصلی صفحه را تعیین میکنیم. یعنی قسمت‌هایی که قرار است داده را وارد کنیم (تگ `input`) و نتایج فرمول‌ها را مشاهده کنیم (تگ `formula`). و در نهایت فوتر صفحه را تعیین کرده‌ایم که در آن مشخصات نویسنده را نوشته‌ام.
در تگ‌های `input` مطابق خواسته سوال، داده‌ها را وارد میکنیم و سپس در تگ‌های `formula` مطابق با فرمولی که بر اساس `id` ورودی‌ها مشخص کرده‌ایم، نتایج را مشاهده میکنیم.
### عملکرد فایل جاوااسکریپت
در فایل جاوااسکریپت ابتدا توابع موردنیاز برای محاسبه فرمول‌ها و متغیرهای لازم را تعریف کرده‌ام.
```javascript
    constructor() {
        this.inputs = {};
        this.formulaElements = document.querySelectorAll('formula');
        this.initInputs();
        this.initFormulas();
        this.setupEventListeners();
    }

    initInputs() {
        document.querySelectorAll('input[type="number"]').forEach(input => {
            this.inputs[input.id] = 0;
            input.addEventListener('input', () => this.updateInput(input));
        });
    }
```
در تابع `constructor` متغیرهای موردنیاز و توابعی که برای محاسبه فرمول‌ها موردنیاز است را تعریف میکنیم و یا صدا میزنیم. سپس در تابع `initInputs` به ازای هر ورودی مقدار اولیه آن را به 0 مقداردهی میکنیم و بر روی آن یک   `eventListener` صدا میکنیم که در زمان تغییر ورودی‌ها فرمول‌ها با استفاده از تابع `updateInput` دوباره محاسبه شوند.
```javascript
    updateInput(input) {
        this.inputs[input.id] = parseFloat(input.value) || 0;
        this.updateAllFormulas();
    }
```
در تابع `updateInput` مقدار متناظر با `id` هر ورودی را با مقدار متناظر ورودی در صورت عددبودن ست میکنیم و در غیر این صورت به صفر مقداردهی میکنیم و سپس به سراغ محاسبه کردن همه فرمول‌ها میرویم.
```javascript
    initFormulas() {
        this.formulaElements.forEach(formula => {
            formula.setAttribute('readonly', 'true');
            this.evaluateFormula(formula);
        });
    }
```
در تابع `iniFormulas` هر فرمول را `readonly` میکنیم و سپس با استفاده از تابع `evaluateFormula` به سراغ محاسبه آن میرویم.
```javascript
    evaluateFormula(formula) {
        const expression = formula.getAttribute('evaluator');
        try {
            const result = this.calculateExpression(expression);
            formula.textContent = result;
        } catch (e) {
            formula.textContent = 'Invalid Formula';
        }
    }
```
در این تابع با استفاده از ویژگی `evaluator` که در آن فرمول متناظر با هر تگ `formula` را نوشته‌ایم را ذخیره میکنیم و سپس به سراغ محاسبه فرمول با استفاده از تابع `calculateExpression` میرویم.



### استایل‌دهی با `CSS`
برای استایل‌دهی از `CSS` استفاده کرده‌ام. تمام استایل‌های موردنیاز در این فایل نوشته شده‌اند. با استفاده از ویژگی‌هایی مانند `text-align: center`، محتوای صفحه را تنظیم کرده‌ام.

همچنین، برای نمایش ورودی‌ها به‌صورت ستونی و ریسپانسیو بودن صفحه اقداماتی انجام داده‌ام.

در بخش دیگری از فایل، رنگ متن، رنگ پس‌زمینه، فاصله از مرزها و سایر ویژگی‌های ظاهری را مشخص کرده‌ام.

