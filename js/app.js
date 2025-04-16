// 初期表示：subpage を非表示、home を表示
window.onload = () => {
    // すべての subpage を非表示にする
    document.querySelectorAll('.subpage').forEach(section => {
        section.style.display = 'none';
    });
    // home を表示
    document.getElementById('home').style.display = 'block';
};

// ページ切り替えイベント
document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('data-target');

        // CSS切り替え
        const newCss = (target === 'home') ? 'styles.css' : 'styles_sub.css';
        document.getElementById('dynamic-css').setAttribute('href', newCss);

        // セクションの表示切り替え
        toggleVisibility(target);

        // URLを変更（ページ遷移を模倣）
        const newUrl = `https://shujiro-fujioka.vercel.app/${target}`;
        // const newUrl = `#${target}`;
        history.pushState({ target: target }, '', newUrl);
    });
});

// スクロールで「トップに戻る」ボタン表示
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// 「トップに戻る」ボタンの動作
document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// セクションの表示切り替えを行う関数
function toggleVisibility(target) {
    // 全セクションを非表示
    document.querySelectorAll('.subpage').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('page-active'); // アクティブ状態を解除
        section.classList.add('page-transition'); // アニメーションの追加
    });

    // 対象セクションを表示
    const section = document.getElementById(target);
    if (section) {
        section.style.display = 'block';
        section.classList.remove('page-transition'); // アニメーションを解除
        section.classList.add('page-active'); // 新しいページをアクティブにする

        // home に戻るときのみアニメーションを追加
        if (target === 'home') {
            section.classList.add('fade-in'); // フェードインアニメーションを追加
        }
    }
}

// ブラウザの「戻る」ボタンや「進む」ボタンに対応するための処理
window.addEventListener('popstate', function(event) {
    const target = event.state ? event.state.target : 'home'; // デフォルトは home
    toggleVisibility(target);

    // CSSの変更（ブラウザの履歴に基づく）
    const newCss = (target === 'home') ? 'styles.css' : 'styles_sub.css';
    document.getElementById('dynamic-css').setAttribute('href', newCss);
});

document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll("#publication h2");

    headings.forEach(h2 => {
        const content = h2.nextElementSibling;

        if (content) {
            content.classList.add("collapsible-content"); // 初期状態で折りたたみ用クラスを適用
        }

        h2.style.cursor = "pointer"; // カーソル変更でわかりやすく

        h2.addEventListener("click", function () {
            if (content) {
                content.classList.toggle("open"); // クリックで開閉する
            }
        });
    });
});

