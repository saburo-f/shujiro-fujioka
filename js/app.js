document.addEventListener("DOMContentLoaded", () => {
    // 初期表示：subpage を非表示、home を表示
    document.querySelectorAll('.subpage').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('home').style.display = 'block';

    // ページ切り替えイベント
    document.querySelectorAll('[data-target]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            toggleVisibility(target);
            history.pushState({ target: target }, '', '?page=' + target);
        });
    });

    // 初期状態でcheckedのスイッチがあれば開く
    document.querySelectorAll(".toggle-switch").forEach((toggle) => {
        const wrapper = toggle.closest(".collapsible-wrapper");
        const content = wrapper.querySelector(".collapsible-content");
        if (toggle.checked) {
            content.classList.add("open");
        }
        // スイッチの状態によって開閉を切り替える
        toggle.addEventListener("change", function () {
            if (this.checked) {
                content.classList.add("open");
            } else {
                content.classList.remove("open");
            }
        });
    });

    // wrapper 全体クリックでスイッチを切り替える
    document.querySelectorAll(".collapsible-header").forEach((wrapper) => {
        wrapper.addEventListener("click", function (e) {
            const toggle = wrapper.querySelector(".toggle-switch");

            if (
                e.target.classList.contains("toggle-switch") ||
                e.target.classList.contains("slider")
            ) {
                return;
            }

            toggle.checked = !toggle.checked;
            toggle.dispatchEvent(new Event("change"));
        });
    });

    // トップに戻るボタンの動作
    document.getElementById("backToTop").onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // スクロールで「トップに戻る」ボタン表示
    window.onscroll = function () {
        const backToTopButton = document.getElementById("backToTop");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };
});

// セクションの表示切り替え関数
function toggleVisibility(target) {
    // すべて非表示にする
    document.querySelectorAll('.subpage').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('page-active');
        section.classList.add('page-transition');
    });

    const section = document.getElementById(target);
    if (section) {
        section.style.display = 'block';
        section.classList.remove('page-transition');
        section.classList.add('page-active');
        if (target === 'home') {
            section.classList.add('fade-in');
        }
    }

    window.scrollTo({ top: 0 });
}

// 戻る・進むボタン対応
window.addEventListener('popstate', function (event) {
    const target = event.state ? event.state.target : 'home';
    toggleVisibility(target);
});
