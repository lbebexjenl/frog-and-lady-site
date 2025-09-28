export default function FrogAndLadySite() {
  // TODO: Replace this path with your hosted frog logo asset
  const frogLogo = "/assets/frog-logo.png"; // e.g., /images/frog-logo.png
  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#1d1d1f]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#F6F4EE]/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={frogLogo} alt="The Frog & Lady logo" className="w-10 h-10 rounded-full object-contain ring-1 ring-black/10 bg-white"/>
            <span className="font-semibold tracking-wide">THE FROG & LADY</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#shop-page" className="hover:opacity-70">Shop</a>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#eco" className="hover:opacity-70">Sustainability</a>
            <a href="#family" className="hover:opacity-70">Frog Family</a>
          </nav>
          <button className="md:hidden px-3 py-2 rounded-md border border-black/10">Menu</button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 pt-16 pb-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Eco‑Minimal Activewear
              <span className="block text-[#2b5a2e]">with a Retro Soul</span>
            </h1>
            <p className="mt-4 text-lg text-black/70">Born in Hawai‘i. Designed for life in motion—clean silhouettes, small‑batch drops, and playful frog energy.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#shop-page" className="px-5 py-3 rounded-xl bg-[#2b5a2e] text-white hover:bg-[#224823] transition">Shop New Arrivals</a>
              <a href="#family" className="px-5 py-3 rounded-xl bg-white border border-black/10 hover:bg-black/5">Join the Frog Family</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-black/60">
              <div className="flex items-center gap-2"><span className="text-xl">♻️</span><span>Recycled & organic fabrics</span></div>
              <div className="flex items-center gap-2"><span className="text-xl">🧵</span><span>Small‑batch production</span></div>
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-2 grid grid-cols-2 gap-2">
            <div className="rounded-2xl bg-[url('https://images.unsplash.com/photo-1517963628607-235ccdd5476a?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center min-h-[220px]"></div>
            <div className="rounded-2xl bg-[url('https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center min-h-[220px]"></div>
            <div className="col-span-2 rounded-2xl bg-[url('https://images.unsplash.com/photo-1604176354204-9268737828bb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center min-h-[220px]"></div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section id="shop" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold">Shop the Capsules</h2>
            <a href="#" className="hidden md:inline text-sm underline">View all products</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {title:'Minimal Core', img:'https://images.unsplash.com/photo-1520975693416-35a3c1c52e8f?q=80&w=1400&auto=format&fit=crop', tag:'Women’s & Unisex'},
              {title:'Minimal Vintage', img:'https://images.unsplash.com/photo-1616348436168-de43ad7bfa24?q=80&w=1400&auto=format&fit=crop', tag:'Retro‑inspired washes'},
              {title:'Accessories', img:'https://images.unsplash.com/photo-1520975855435-1d8e6ac2d5ba?q=80&w=1400&auto=format&fit=crop', tag:'Totes, caps & socks'}
            ].map((c,i)=> (
              <a key={i} href="#" className="group block">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-black/5 bg-white shadow-sm">
                  <div className={`w-full h-full bg-cover bg-center scale-100 group-hover:scale-105 transition`}
                       style={{backgroundImage:`url(${c.img})`}}/>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-black/60">{c.tag}</div>
                  </div>
                  <span className="text-[#2b5a2e]">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers (placeholders) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold">Best Sellers</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              {name:'Seamless Rib Crop Tank', price:'$42', color:'Bone'},
              {name:'High‑Waisted Leggings', price:'$68', color:'Black'},
              {name:'Minimal Hoodie (Unisex)', price:'$78', color:'Stone'},
              {name:'Canvas Tote', price:'$28', color:'Natural'}
            ].map((p,i)=> (
              <div key={i} className="bg-white rounded-2xl border border-black/5 p-4 shadow-sm">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-black/5 to-black/0 grid place-items-center text-4xl">🐸</div>
                <div className="mt-3 font-medium">{p.name}</div>
                <div className="text-sm text-black/60">{p.color}</div>
                <div className="mt-1">{p.price}</div>
                <button className="mt-3 w-full py-2 rounded-lg bg-[#2b5a2e] text-white hover:bg-[#224823]">Add to bag</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-black/5 p-8 shadow-sm">
            <h3 className="text-3xl font-semibold">Born in Hawai‘i</h3>
            <p className="mt-3 text-black/70">We started as a playful Depop shop in Hawai‘i—curating Y2K and vintage gems. Today we design our own eco‑minimal line that carries that same retro soul forward.</p>
            <p className="mt-3 text-black/70">Our frog mascot stands for transformation, nature, and not taking fashion too seriously. Join us as we build a welcoming, inclusive community—The Frog Family.</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-black/5 bg-[url('https://images.unsplash.com/photo-1546502203-234d29586f3b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center min-h-[300px]"></div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="eco" className="py-16 bg-white/60 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-semibold">Sustainability Receipts</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {icon:'♻️', title:'Better Materials', text:'Recycled polyester, organic cotton, Tencel™, and low‑impact dyes.'},
              {icon:'🧵', title:'Small‑Batch', text:'Limited runs reduce waste and keep quality high.'},
              {icon:'📦', title:'Earth‑kind Packaging', text:'Recycled or compostable mailers and minimal swing tags.'},
            ].map((f,i)=> (
              <div key={i} className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm">
                <div className="text-3xl">{f.icon}</div>
                <div className="mt-2 font-medium">{f.title}</div>
                <p className="text-sm text-black/70 mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Frog Family */}
      <section id="family" className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center bg-white border border-black/5 rounded-3xl p-8 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#2b5a2e] text-white grid place-items-center mx-auto mb-3">🐸</div>
          <h3 className="text-3xl font-semibold">Join the Frog Family</h3>
          <p className="mt-2 text-black/70">Hop into our eco‑playful tribe. Get early access to drops, exclusive news, and member perks.</p>
          <p className="mt-1">Sign up & get <span className="font-semibold">10% off</span> your first order — code <span className="font-semibold">HOP10</span> delivered to your inbox.</p>
          <form className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Email address" type="email" className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white" />
            <button className="px-5 py-3 rounded-xl bg-[#2b5a2e] text-white hover:bg-[#224823]">Hop In</button>
          </form>
          <p className="text-xs text-black/60 mt-2">By joining, you agree to receive emails. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Shop Page Template */}
      <section id="shop-page" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h3 className="text-3xl font-semibold">Shop All</h3>
              <p className="text-black/60">Minimal Core • Minimal Vintage • Accessories</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <input placeholder="Search products" className="px-4 py-2 rounded-xl border border-black/10 bg-white" />
              <select className="px-4 py-2 rounded-xl border border-black/10 bg-white">
                <option>All Categories</option>
                <option>Women</option>
                <option>Unisex</option>
                <option>Accessories</option>
              </select>
              <select className="px-4 py-2 rounded-xl border border-black/10 bg-white">
                <option>Sort: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {name:'Rib Crop Tank', price:'$42', color:'Bone', tag:'Minimal Core'},
              {name:'High‑Waisted Leggings', price:'$68', color:'Black', tag:'Minimal Core'},
              {name:'Minimal Hoodie', price:'$78', color:'Stone', tag:'Unisex'},
              {name:'Dolphin Shorts (Vintage Wash)', price:'$48', color:'Sage', tag:'Minimal Vintage'},
              {name:'Oversized Boxy Tee', price:'$38', color:'Charcoal', tag:'Unisex'},
              {name:'Straight‑Leg Joggers', price:'$72', color:'Unisex', tag:'Unisex'},
              {name:'Canvas Tote', price:'$28', color:'Natural', tag:'Accessories'},
              {name:'Cap', price:'$24', color:'Black', tag:'Accessories'}
            ].map((p,i)=> (
              <div key={i} className="bg-white rounded-2xl border border-black/5 p-4 shadow-sm">
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-black/5 to-black/0 grid place-items-center text-4xl">🐸</div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm text-black/60">{p.color} • {p.tag}</div>
                  </div>
                  <div className="font-medium">{p.price}</div>
                </div>
                <button className="mt-3 w-full py-2 rounded-lg bg-[#2b5a2e] text-white hover:bg-[#224823]">Add to bag</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-semibold">THE FROG & LADY</div>
            <div className="text-black/60">Honolulu, Hawai‘i</div>
          </div>
          <div className="flex gap-6 text-black/70">
            <a href="#" className="hover:opacity-70">Shipping & Returns</a>
            <a href="#" className="hover:opacity-70">Size Guide</a>
            <a href="#" className="hover:opacity-70">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
