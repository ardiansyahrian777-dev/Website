(function () {
  "use strict";
  var S = window.SITE;
  if (!S) {
    document.body.textContent = "Berkas content.js tidak ditemukan atau ada kesalahan penulisan di dalamnya.";
    return;
  }

  /* ---------- alat bantu ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    var a = attrs || {};
    Object.keys(a).forEach(function (k) {
      var v = a[k];
      if (v === null || v === undefined || v === false || v === "") return;
      if (k === "class") el.className = v;
      else el.setAttribute(k, v);
    });
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c === null || c === undefined || c === false) return;
    if (Array.isArray(c)) return c.forEach(function (x) { append(el, x); });
    el.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
  }
  function has(v) {
    if (Array.isArray(v)) return v.length > 0;
    return v !== undefined && v !== null && String(v).trim() !== "";
  }
  function safeUrl(u) {
    u = String(u || "").trim();
    if (!u) return "";
    if (/^(https?:|mailto:|tel:|#|\/|\.\/|\.\.\/|[\w\-]+\/|[\w\-]+\.\w+$)/i.test(u) && !/^javascript:/i.test(u)) return u;
    return "";
  }
  function external(u) { return /^https?:/i.test(u); }
  function link(label, url, cls) {
    var href = safeUrl(url);
    if (!href) return null;
    var a = h("a", { href: href, class: cls }, label);
    if (external(href)) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); }
    return a;
  }
  var STAR = '<svg viewBox="0 0 64 64" fill="none" stroke="#D4A24A" stroke-width="2.5" aria-hidden="true"><rect x="14" y="14" width="36" height="36"/><rect x="14" y="14" width="36" height="36" transform="rotate(45 32 32)"/></svg>';
  function starSvg() { var d = document.createElement("div"); d.innerHTML = STAR; return d.firstChild; }

  /* ---------- tema ---------- */
  var t = S.tema || {};
  var root = document.documentElement.style;
  if (t.utama) root.setProperty("--pine", t.utama);
  if (t.emas) root.setProperty("--gold", t.emas);
  if (t.emasTeks) root.setProperty("--gold-ink", t.emasTeks);

  var id = S.identitas || {};
  document.title = id.nama || "Pondok Pesantren";
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && id.tagline) metaDesc.setAttribute("content", id.tagline);

  /* ---------- bagian-bagian halaman ---------- */
  var main = document.getElementById("isi");
  var menu = [];

  function part(key, cls, build) {
    var d = S[key];
    if (!d || !has(d.judul)) return;
    var inner = build(d);
    if (!inner) return;
    var sec = h("section", { class: "part " + (cls || ""), id: key },
      h("div", { class: "wrap" }, inner));
    main.appendChild(sec);
    if (has(d.menu)) menu.push({ id: key, label: d.menu });
  }
  function heading(d) {
    return h("div", { class: "head" }, h("h2", null, d.judul), has(d.intro) ? h("p", { class: "intro" }, d.intro) : null);
  }

  // Hero
  (function () {
    var hero = S.hero || {};
    var photo;
    if (has(hero.foto)) {
      var img = h("img", { src: hero.foto, alt: id.nama || "", loading: "eager" });
      photo = h("div", { class: "hero-photo" }, img);
      img.addEventListener("error", function () {
        photo.className = "hero-photo empty";
        photo.textContent = "";
        photo.appendChild(starSvg());
      });
    } else {
      photo = h("div", { class: "hero-photo empty", "aria-hidden": "true" });
      photo.appendChild(starSvg());
    }
    var b1 = hero.tombolUtama ? link(hero.tombolUtama.teks, hero.tombolUtama.link, "btn btn-gold") : null;
    var b2 = hero.tombolKedua ? link(hero.tombolKedua.teks, hero.tombolKedua.link, "btn btn-line") : null;
    var sec = h("section", { class: "hero", id: "beranda" },
      h("div", { class: "wrap hero-inner" },
        h("div", null,
          id.tampilkanBismillah ? h("p", { class: "bismillah", lang: "ar", dir: "rtl" }, "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ") : null,
          has(id.nama) ? h("p", { class: "name" }, id.nama) : null,
          h("h1", null, hero.judul || id.nama || ""),
          has(hero.deskripsi) ? h("p", { class: "lead" }, hero.deskripsi) : null,
          (b1 || b2) ? h("div", { class: "btns" }, b1, b2) : null
        ),
        photo
      )
    );
    main.appendChild(sec);
  })();

  // Tentang
  part("tentang", "", function (d) {
    var left = h("div", null,
      h("h2", null, d.judul),
      (d.paragraf || []).filter(has).map(function (p) { return h("p", null, p); }),
      has(d.sejarah) ? h("div", { class: "history" }, h("h3", null, "Sejarah singkat"), h("p", null, d.sejarah)) : null
    );
    var right = h("div", null,
      has(d.visi) ? h("div", { class: "vision" }, h("h3", null, "Visi"), h("blockquote", null, d.visi)) : null,
      has(d.misi) ? h("div", { class: "mission" }, h("h3", null, "Misi"),
        h("ul", null, d.misi.filter(has).map(function (m) { return h("li", null, m); }))) : null
    );
    return h("div", { class: "about" }, left, right);
  });

  // Program
  part("program", "tint", function (d) {
    if (!has(d.daftar)) return null;
    return [heading(d), h("div", { class: "rows" }, d.daftar.map(function (p) {
      return h("div", { class: "row" },
        h("h3", null, p.nama, has(p.jenjang) ? h("span", { class: "tag" }, p.jenjang) : null),
        h("p", null, p.deskripsi || ""));
    }))];
  });

  // Kegiatan
  part("kegiatan", "dark", function (d) {
    if (!has(d.jadwal)) return null;
    return [heading(d), h("ol", { class: "timeline" }, d.jadwal.map(function (j) {
      return h("li", null, h("time", null, j.waktu || ""), h("span", null, j.kegiatan || ""));
    }))];
  });

  // Fasilitas
  part("fasilitas", "", function (d) {
    if (!has(d.daftar)) return null;
    return [heading(d), h("div", { class: "facilities" }, d.daftar.map(function (f) {
      return h("div", { class: "facility" }, h("h3", null, f.nama), has(f.deskripsi) ? h("p", null, f.deskripsi) : null);
    }))];
  });

  // Pengasuh
  part("pengasuh", "tint", function (d) {
    if (!has(d.daftar)) return null;
    return [heading(d), h("div", { class: "people" }, d.daftar.map(function (p) {
      var av = h("div", { class: "avatar" });
      function fallback() { av.textContent = ""; av.appendChild(starSvg()); }
      if (has(p.foto)) {
        var img = h("img", { src: p.foto, alt: p.nama || "", loading: "lazy" });
        img.addEventListener("error", fallback);
        av.appendChild(img);
      } else fallback();
      return h("div", { class: "person" }, av, h("h3", null, p.nama),
        has(p.jabatan) ? h("p", { class: "role" }, p.jabatan) : null,
        has(p.keterangan) ? h("p", null, p.keterangan) : null);
    }))];
  });

  // Berita
  part("berita", "", function (d) {
    if (!has(d.daftar)) return null;
    return [heading(d), h("div", { class: "news" }, d.daftar.map(function (n) {
      var title = link(n.judul, n.link) || n.judul;
      return h("article", { class: "news-item" },
        h("time", null, n.tanggal || ""),
        h("div", null, h("h3", null, title), has(n.ringkasan) ? h("p", null, n.ringkasan) : null));
    }))];
  });

  // Galeri
  part("galeri", "tint", function (d) {
    if (!has(d.foto)) return null;
    return [heading(d), h("div", { class: "gallery" }, d.foto.map(function (f) {
      var fig = h("figure", null);
      function ph() {
        fig.textContent = "";
        fig.appendChild(h("div", { class: "ph" }, has(f.keterangan) ? f.keterangan : "Foto belum ditambahkan"));
      }
      if (has(f.src)) {
        var img = h("img", { src: f.src, alt: f.keterangan || "", loading: "lazy" });
        img.addEventListener("error", ph);
        fig.appendChild(img);
        if (has(f.keterangan)) fig.appendChild(h("figcaption", null, f.keterangan));
      } else ph();
      return fig;
    }))];
  });

  // Pendaftaran
  part("pendaftaran", "dark", function (d) {
    var btn = d.tombol ? link(d.tombol.teks, d.tombol.link, "btn btn-gold") : null;
    return [heading(d), h("div", { class: "reg" },
      has(d.alur) ? h("ol", { class: "steps" }, d.alur.map(function (a) {
        return h("li", null, h("div", null, h("h3", null, a.judul), h("p", null, a.keterangan || "")));
      })) : h("div"),
      (has(d.syarat) || btn) ? h("div", { class: "reqs" },
        has(d.syarat) ? [h("h3", null, "Syarat pendaftaran"), h("ul", null, d.syarat.filter(has).map(function (s) { return h("li", null, s); }))] : null,
        btn) : null
    )];
  });

  // Kontak
  part("kontak", "", function (d) {
    var dl = h("dl", null);
    function row(label, val) { if (has(val)) dl.appendChild(h("dt", null, label)); if (has(val)) dl.appendChild(h("dd", null, val)); }
    row("Alamat", d.alamat);
    row("Jam layanan", d.jamLayanan);
    if (has(d.whatsapp)) {
      var num = String(d.whatsapp).replace(/\D/g, "");
      dl.appendChild(h("dt", null, "WhatsApp"));
      dl.appendChild(h("dd", null, h("a", { href: "https://wa.me/" + num, target: "_blank", rel: "noopener" }, d.whatsapp)));
    }
    if (has(d.telepon)) {
      dl.appendChild(h("dt", null, "Telepon"));
      dl.appendChild(h("dd", null, h("a", { href: "tel:" + String(d.telepon).replace(/[^\d+]/g, "") }, d.telepon)));
    }
    if (has(d.email)) {
      dl.appendChild(h("dt", null, "Email"));
      dl.appendChild(h("dd", null, h("a", { href: "mailto:" + d.email }, d.email)));
    }
    var soc = (d.sosial || []).map(function (s) { return link(s.nama, s.link); }).filter(Boolean);
    var map = null;
    if (has(d.peta) && /^https:\/\//i.test(d.peta)) {
      map = h("div", { class: "map" }, h("iframe", { src: d.peta, loading: "lazy", title: "Peta lokasi pesantren", referrerpolicy: "no-referrer-when-downgrade", allowfullscreen: "" }));
    }
    return h("div", { class: "contact" },
      h("div", null, h("h2", null, d.judul), dl, soc.length ? h("div", { class: "social" }, soc) : null),
      map || h("div"));
  });

  /* ---------- bilah atas ---------- */
  (function () {
    var top = document.getElementById("topbar");
    var mark = h("span", { class: "brand-mark" });
    if (has(id.logo)) {
      var li = h("img", { src: id.logo, alt: "" });
      li.addEventListener("error", function () { mark.textContent = ""; mark.appendChild(starSvg()); });
      mark.appendChild(li);
    } else mark.appendChild(starSvg());

    var nav = h("nav", { class: "nav", id: "nav", "aria-label": "Menu utama" });
    menu.forEach(function (m) {
      var cls = m.id === "pendaftaran" ? "cta" : "";
      nav.appendChild(h("a", { href: "#" + m.id, class: cls }, m.label));
    });
    var btn = h("button", { class: "menu-btn", type: "button", "aria-expanded": "false", "aria-controls": "nav" }, "Menu");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
    top.appendChild(h("div", { class: "wrap" },
      h("a", { class: "brand", href: "#beranda" }, mark, id.namaSingkat || id.nama || ""),
      btn, nav));
  })();

  /* ---------- kaki halaman ---------- */
  (function () {
    var f = S.footer || {};
    document.getElementById("footer").appendChild(h("div", { class: "wrap" },
      h("span", null, "© " + new Date().getFullYear() + " " + (id.nama || "") + (has(f.teks) ? ". " + f.teks : "")),
      h("a", { href: "#beranda" }, "Kembali ke atas")));
  })();
})();
