/* -----------------------------------------------
/* Author :こう ~たぬき教教祖~
/* MIT license: http://opensource.org/licenses/MIT
/* GitHub : https://github.com/KoTanukiKyoso/particles.jsWithRotateAndImageOpacity

/* 英語わかりません．はい．
/* 以下のparticles.jsをお借りして，
/* 画像にopacity効果が入るようにして
/* シェイプの回転ができるようにしました
/* 詳しいことはGitHubとか記事とかにすると思うのでそっちを参照してください．
/* ----------------------------------------------- */

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
var pJS = function(e, t) {
    var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: a,
            w: a.offsetWidth,
            h: a.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            rotate: {
                value: 0,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var y = this.pJS;
    t && Object.deepExtend(y, t),
    y.tmp.obj = {
        rotate_value: y.particles.rotate.value,
        rotate_anim_speed: y.particles.rotate.anim.speed,
        size_value: y.particles.size.value,
        size_anim_speed: y.particles.size.anim.speed,
        move_speed: y.particles.move.speed,
        line_linked_distance: y.particles.line_linked.distance,
        line_linked_width: y.particles.line_linked.width,
        mode_grab_distance: y.interactivity.modes.grab.distance,
        mode_bubble_distance: y.interactivity.modes.bubble.distance,
        mode_bubble_size: y.interactivity.modes.bubble.size,
        mode_repulse_distance: y.interactivity.modes.repulse.distance
    },
    y.fn.retinaInit = function() {
        y.retina_detect && 1 < window.devicePixelRatio ? (y.canvas.pxratio = window.devicePixelRatio,
        y.tmp.retina = !0) : (y.canvas.pxratio = 1,
        y.tmp.retina = !1),
        y.canvas.w = y.canvas.el.offsetWidth * y.canvas.pxratio,
        y.canvas.h = y.canvas.el.offsetHeight * y.canvas.pxratio,
        y.particles.rotate.value = y.tmp.obj.rotate_value * y.canvas.pxratio,
        y.particles.rotate.anim.speed = y.tmp.obj.rotate_anim_speed * y.canvas.pxratio,
        y.particles.size.value = y.tmp.obj.size_value * y.canvas.pxratio,
        y.particles.size.anim.speed = y.tmp.obj.size_anim_speed * y.canvas.pxratio,
        y.particles.move.speed = y.tmp.obj.move_speed * y.canvas.pxratio,
        y.particles.line_linked.distance = y.tmp.obj.line_linked_distance * y.canvas.pxratio,
        y.interactivity.modes.grab.distance = y.tmp.obj.mode_grab_distance * y.canvas.pxratio,
        y.interactivity.modes.bubble.distance = y.tmp.obj.mode_bubble_distance * y.canvas.pxratio,
        y.particles.line_linked.width = y.tmp.obj.line_linked_width * y.canvas.pxratio,
        y.interactivity.modes.bubble.size = y.tmp.obj.mode_bubble_size * y.canvas.pxratio,
        y.interactivity.modes.repulse.distance = y.tmp.obj.mode_repulse_distance * y.canvas.pxratio
    }
    ,
    y.fn.canvasInit = function() {
        y.canvas.ctx = y.canvas.el.getContext("2d")
    }
    ,
    y.fn.canvasSize = function() {
        y.canvas.el.width = y.canvas.w,
        y.canvas.el.height = y.canvas.h,
        y && y.interactivity.events.resize && window.addEventListener("resize", function() {
            y.canvas.w = y.canvas.el.offsetWidth,
            y.canvas.h = y.canvas.el.offsetHeight,
            y.tmp.retina && (y.canvas.w *= y.canvas.pxratio,
            y.canvas.h *= y.canvas.pxratio),
            y.canvas.el.width = y.canvas.w,
            y.canvas.el.height = y.canvas.h,
            y.particles.move.enable || (y.fn.particlesEmpty(),
            y.fn.particlesCreate(),
            y.fn.particlesDraw(),
            y.fn.vendors.densityAutoParticles()),
            y.fn.vendors.densityAutoParticles()
        })
    }
    ,
    y.fn.canvasPaint = function() {
        y.canvas.ctx.fillRect(0, 0, y.canvas.w, y.canvas.h)
    }
    ,
    y.fn.canvasClear = function() {
        y.canvas.ctx.clearRect(0, 0, y.canvas.w, y.canvas.h)
    }
    ,
    y.fn.particle = function(e, t, a) {
        var i;
        this.rotate = (y.particles.rotate.random ? Math.random() : 1) * y.particles.rotate.value,
        y.particles.rotate.anim.enable && (this.vr = y.particles.rotate.anim.speed / 10),
        this.radius = (y.particles.size.random ? Math.random() : 1) * y.particles.size.value,
        y.particles.size.anim.enable && (this.size_status = !1,
        this.vs = y.particles.size.anim.speed / 100,
        y.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        this.x = a ? a.x : Math.random() * y.canvas.w,
        this.y = a ? a.y : Math.random() * y.canvas.h,
        this.x > y.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > y.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        y.particles.move.bounce && y.fn.vendors.checkOverlap(this, a),
        this.color = {},
        "object" == typeof e.value ? e.value instanceof Array ? (i = e.value[Math.floor(Math.random() * y.particles.color.value.length)],
        this.color.rgb = hexToRgb(i)) : (null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
            r: e.value.r,
            g: e.value.g,
            b: e.value.b
        }),
        null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
            h: e.value.h,
            s: e.value.s,
            l: e.value.l
        })) : "random" == e.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof e.value && (this.color = e,
        this.color.rgb = hexToRgb(this.color.value)),
        this.opacity = (y.particles.opacity.random ? Math.random() : 1) * y.particles.opacity.value,
        y.particles.opacity.anim.enable && (this.opacity_status = !1,
        this.vo = y.particles.opacity.anim.speed / 100,
        y.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var n = {};
        switch (y.particles.move.direction) {
        case "top":
            n = {
                x: 0,
                y: -1
            };
            break;
        case "top-right":
            n = {
                x: .5,
                y: -.5
            };
            break;
        case "right":
            n = {
                x: 1,
                y: -0
            };
            break;
        case "bottom-right":
            n = {
                x: .5,
                y: .5
            };
            break;
        case "bottom":
            n = {
                x: 0,
                y: 1
            };
            break;
        case "bottom-left":
            n = {
                x: -.5,
                y: 1
            };
            break;
        case "left":
            n = {
                x: -1,
                y: 0
            };
            break;
        case "top-left":
            n = {
                x: -.5,
                y: -.5
            };
            break;
        default:
            n = {
                x: 0,
                y: 0
            }
        }
        y.particles.move.straight ? (this.vx = n.x,
        this.vy = n.y,
        y.particles.move.random && (this.vx = this.vx * Math.random(),
        this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5,
        this.vy = n.y + Math.random() - .5),
        this.vx_i = this.vx,
        this.vy_i = this.vy;
        var s, r, c = y.particles.shape.type;
        "object" == typeof c ? c instanceof Array && (s = c[Math.floor(Math.random() * c.length)],
        this.shape = s) : this.shape = c,
        "image" == this.shape && (r = y.particles.shape,
        this.img = {
            src: r.image.src,
            ratio: r.image.width / r.image.height
        },
        this.img.ratio || (this.img.ratio = 1),
        "svg" == y.tmp.img_type && null != y.tmp.source_svg && (y.fn.vendors.createSvgImg(this),
        y.tmp.pushing && (this.img.loaded = !1)))
    }
    ,
    y.fn.particle.prototype.draw = function() {
        var e, t, a, i, n = this;
        switch (e = null != n.radius_bubble ? n.radius_bubble : n.radius,
        t = null != n.opacity_bubble ? n.opacity_bubble : n.opacity,
        y.canvas.ctx.globalAlpha = t,
        a = n.color.rgb ? "rgba(" + n.color.rgb.r + "," + n.color.rgb.g + "," + n.color.rgb.b + ")" : "hsla(" + n.color.hsl.h + "," + n.color.hsl.s + "%," + n.color.hsl.l + "%)",
        y.canvas.ctx.fillStyle = a,
        y.canvas.ctx.beginPath(),
        n.rotate = (n.rotate + 360) % 360,
        "circle" != n.shape && n.rotate && (y.canvas.ctx.save(),
        y.canvas.ctx.translate(n.x, n.y),
        y.canvas.ctx.rotate(n.rotate * Math.PI / 180),
        y.canvas.ctx.translate(-n.x, -n.y)),
        n.shape) {
        case "circle":
            y.canvas.ctx.arc(n.x, n.y, e, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            y.canvas.ctx.rect(n.x - e, n.y - e, 2 * e, 2 * e);
            break;
        case "triangle":
            y.fn.vendors.drawShape(y.canvas.ctx, n.x - e, n.y + e / 1.66, 2 * e, 3, 2);
            break;
        case "polygon":
            y.fn.vendors.drawShape(y.canvas.ctx, n.x - e / (y.particles.shape.polygon.nb_sides / 3.5), n.y - e / .76, 2.66 * e / (y.particles.shape.polygon.nb_sides / 3), y.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            y.fn.vendors.drawShape(y.canvas.ctx, n.x - 2 * e / (y.particles.shape.polygon.nb_sides / 4), n.y - e / 1.52, 2 * e * 2.66 / (y.particles.shape.polygon.nb_sides / 3), y.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            (i = "svg" == y.tmp.img_type ? n.img.obj : y.tmp.img_obj) && y.canvas.ctx.drawImage(i, n.x - e, n.y - e, 2 * e, 2 * e / n.img.ratio)
        }
        "circle" != n.shape && n.rotate && y.canvas.ctx.restore(),
        y.canvas.ctx.closePath(),
        0 < y.particles.shape.stroke.width && (y.canvas.ctx.strokeStyle = y.particles.shape.stroke.color,
        y.canvas.ctx.lineWidth = y.particles.shape.stroke.width,
        y.canvas.ctx.stroke()),
        y.canvas.ctx.fill()
    }
    ,
    y.fn.particlesCreate = function() {
        for (var e = 0; e < y.particles.number.value; e++)
            y.particles.array.push(new y.fn.particle(y.particles.color,y.particles.opacity.value))
    }
    ,
    y.fn.particlesUpdate = function() {
        for (var e = 0; e < y.particles.array.length; e++) {
            var t, a, i = y.particles.array[e];
            switch (y.particles.move.enable && (t = y.particles.move.speed / 2,
            i.x += i.vx * t,
            i.y += i.vy * t),
            y.particles.opacity.anim.enable && (1 == i.opacity_status ? (i.opacity >= y.particles.opacity.value && (i.opacity_status = !1),
            i.opacity += i.vo) : (i.opacity <= y.particles.opacity.anim.opacity_min && (i.opacity_status = !0),
            i.opacity -= i.vo),
            i.opacity < 0 && (i.opacity = 0)),
            y.particles.size.anim.enable && (1 == i.size_status ? (i.radius >= y.particles.size.value && (i.size_status = !1),
            i.radius += i.vs) : (i.radius <= y.particles.size.anim.size_min && (i.size_status = !0),
            i.radius -= i.vs),
            i.radius < 0 && (i.radius = 0)),
            y.particles.rotate.anim.enable && (i.rotate += i.vr),
            a = "bounce" == y.particles.move.out_mode ? {
                x_left: i.radius,
                x_right: y.canvas.w,
                y_top: i.radius,
                y_bottom: y.canvas.h
            } : {
                x_left: -i.radius,
                x_right: y.canvas.w + i.radius,
                y_top: -i.radius,
                y_bottom: y.canvas.h + i.radius
            },
            i.x - i.radius > y.canvas.w ? (i.x = a.x_left,
            i.y = Math.random() * y.canvas.h) : i.x + i.radius < 0 && (i.x = a.x_right,
            i.y = Math.random() * y.canvas.h),
            i.y - i.radius > y.canvas.h ? (i.y = a.y_top,
            i.x = Math.random() * y.canvas.w) : i.y + i.radius < 0 && (i.y = a.y_bottom,
            i.x = Math.random() * y.canvas.w),
            y.particles.move.out_mode) {
            case "bounce":
                (i.x + i.radius > y.canvas.w || i.x - i.radius < 0) && (i.vx = -i.vx),
                (i.y + i.radius > y.canvas.h || i.y - i.radius < 0) && (i.vy = -i.vy)
            }
            if (isInArray("grab", y.interactivity.events.onhover.mode) && y.fn.modes.grabParticle(i),
            (isInArray("bubble", y.interactivity.events.onhover.mode) || isInArray("bubble", y.interactivity.events.onclick.mode)) && y.fn.modes.bubbleParticle(i),
            (isInArray("repulse", y.interactivity.events.onhover.mode) || isInArray("repulse", y.interactivity.events.onclick.mode)) && y.fn.modes.repulseParticle(i),
            y.particles.line_linked.enable || y.particles.move.attract.enable)
                for (var n = e + 1; n < y.particles.array.length; n++) {
                    var s = y.particles.array[n];
                    y.particles.line_linked.enable && y.fn.interact.linkParticles(i, s),
                    y.particles.move.attract.enable && y.fn.interact.attractParticles(i, s),
                    y.particles.move.bounce && y.fn.interact.bounceParticles(i, s)
                }
        }
    }
    ,
    y.fn.particlesDraw = function() {
        y.canvas.ctx.clearRect(0, 0, y.canvas.w, y.canvas.h),
        y.fn.particlesUpdate();
        for (var e = 0; e < y.particles.array.length; e++) {
            y.particles.array[e].draw()
        }
    }
    ,
    y.fn.particlesEmpty = function() {
        y.particles.array = []
    }
    ,
    y.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(y.fn.checkAnimFrame),
        cancelRequestAnimFrame(y.fn.drawAnimFrame),
        y.tmp.source_svg = void 0,
        y.tmp.img_obj = void 0,
        y.tmp.count_svg = 0,
        y.fn.particlesEmpty(),
        y.fn.canvasClear(),
        y.fn.vendors.start()
    }
    ,
    y.fn.interact.linkParticles = function(e, t) {
        var a, i, n = e.x - t.x, s = e.y - t.y, r = Math.sqrt(n * n + s * s);
        r <= y.particles.line_linked.distance && (0 < (a = y.particles.line_linked.opacity - r / (1 / y.particles.line_linked.opacity) / y.particles.line_linked.distance) && (i = y.particles.line_linked.color_rgb_line,
        y.canvas.ctx.strokeStyle = "rgba(" + i.r + "," + i.g + "," + i.b + "," + a + ")",
        y.canvas.ctx.lineWidth = y.particles.line_linked.width,
        y.canvas.ctx.beginPath(),
        y.canvas.ctx.moveTo(e.x, e.y),
        y.canvas.ctx.lineTo(t.x, t.y),
        y.canvas.ctx.stroke(),
        y.canvas.ctx.closePath()))
    }
    ,
    y.fn.interact.attractParticles = function(e, t) {
        var a, i, n = e.x - t.x, s = e.y - t.y;
        Math.sqrt(n * n + s * s) <= y.particles.line_linked.distance && (a = n / (1e3 * y.particles.move.attract.rotateX),
        i = s / (1e3 * y.particles.move.attract.rotateY),
        e.vx -= a,
        e.vy -= i,
        t.vx += a,
        t.vy += i)
    }
    ,
    y.fn.interact.bounceParticles = function(e, t) {
        var a = e.x - t.x
          , i = e.y - t.y;
        Math.sqrt(a * a + i * i) <= e.radius + t.radius && (e.vx = -e.vx,
        e.vy = -e.vy,
        t.vx = -t.vx,
        t.vy = -t.vy)
    }
    ,
    y.fn.modes.pushParticles = function(e, t) {
        y.tmp.pushing = !0;
        for (var a = 0; a < e; a++)
            y.particles.array.push(new y.fn.particle(y.particles.color,y.particles.opacity.value,{
                x: t ? t.pos_x : Math.random() * y.canvas.w,
                y: t ? t.pos_y : Math.random() * y.canvas.h
            })),
            a == e - 1 && (y.particles.move.enable || y.fn.particlesDraw(),
            y.tmp.pushing = !1)
    }
    ,
    y.fn.modes.removeParticles = function(e) {
        y.particles.array.splice(0, e),
        y.particles.move.enable || y.fn.particlesDraw()
    }
    ,
    y.fn.modes.bubbleParticle = function(r) {
        function e() {
            r.opacity_bubble = r.opacity,
            r.radius_bubble = r.radius
        }
        function t(e, t, a, i, n) {
            var s;
            e != t && (y.tmp.bubble_duration_end ? null != a && (s = e + (e - (i - v * (i - e) / y.interactivity.modes.bubble.duration)),
            "size" == n && (r.radius_bubble = s),
            "opacity" == n && (r.opacity_bubble = s)) : l <= y.interactivity.modes.bubble.distance ? (null != a ? a : i) != e && (s = i - v * (i - e) / y.interactivity.modes.bubble.duration,
            "size" == n && (r.radius_bubble = s),
            "opacity" == n && (r.opacity_bubble = s)) : ("size" == n && (r.radius_bubble = void 0),
            "opacity" == n && (r.opacity_bubble = void 0)))
        }
        var a, i, n, s, c, o, l, v;
        y.interactivity.events.onhover.enable && isInArray("bubble", y.interactivity.events.onhover.mode) ? (c = r.x - y.interactivity.mouse.pos_x,
        o = r.y - y.interactivity.mouse.pos_y,
        a = 1 - (l = Math.sqrt(c * c + o * o)) / y.interactivity.modes.bubble.distance,
        l <= y.interactivity.modes.bubble.distance ? 0 <= a && "mousemove" == y.interactivity.status && (y.interactivity.modes.bubble.size != y.particles.size.value && (y.interactivity.modes.bubble.size > y.particles.size.value ? 0 <= (n = r.radius + y.interactivity.modes.bubble.size * a) && (r.radius_bubble = n) : (i = r.radius - y.interactivity.modes.bubble.size,
        n = r.radius - i * a,
        r.radius_bubble = 0 < n ? n : 0)),
        y.interactivity.modes.bubble.opacity != y.particles.opacity.value && (y.interactivity.modes.bubble.opacity > y.particles.opacity.value ? (s = y.interactivity.modes.bubble.opacity * a) > r.opacity && s <= y.interactivity.modes.bubble.opacity && (r.opacity_bubble = s) : (s = r.opacity - (y.particles.opacity.value - y.interactivity.modes.bubble.opacity) * a) < r.opacity && s >= y.interactivity.modes.bubble.opacity && (r.opacity_bubble = s))) : e(),
        "mouseleave" == y.interactivity.status && e()) : y.interactivity.events.onclick.enable && isInArray("bubble", y.interactivity.events.onclick.mode) && (y.tmp.bubble_clicking && (c = r.x - y.interactivity.mouse.click_pos_x,
        o = r.y - y.interactivity.mouse.click_pos_y,
        l = Math.sqrt(c * c + o * o),
        (v = ((new Date).getTime() - y.interactivity.mouse.click_time) / 1e3) > y.interactivity.modes.bubble.duration && (y.tmp.bubble_duration_end = !0),
        v > 2 * y.interactivity.modes.bubble.duration && (y.tmp.bubble_clicking = !1,
        y.tmp.bubble_duration_end = !1)),
        y.tmp.bubble_clicking && (t(y.interactivity.modes.bubble.size, y.particles.size.value, r.radius_bubble, r.radius, "size"),
        t(y.interactivity.modes.bubble.opacity, y.particles.opacity.value, r.opacity_bubble, r.opacity, "opacity")))
    }
    ,
    y.fn.modes.repulseParticle = function(e) {
        var t, a, i, n, s, r, c, o, l, v, p, m, d, u, b;
        y.interactivity.events.onhover.enable && isInArray("repulse", y.interactivity.events.onhover.mode) && "mousemove" == y.interactivity.status ? (t = e.x - y.interactivity.mouse.pos_x,
        a = e.y - y.interactivity.mouse.pos_y,
        n = t / (i = Math.sqrt(t * t + a * a)),
        s = a / i,
        r = clamp(1 / (o = y.interactivity.modes.repulse.distance) * (-1 * Math.pow(i / o, 2) + 1) * o * 100, 0, 50),
        c = {
            x: e.x + n * r,
            y: e.y + s * r
        },
        "bounce" == y.particles.move.out_mode ? (0 < c.x - e.radius && c.x + e.radius < y.canvas.w && (e.x = c.x),
        0 < c.y - e.radius && c.y + e.radius < y.canvas.h && (e.y = c.y)) : (e.x = c.x,
        e.y = c.y)) : y.interactivity.events.onclick.enable && isInArray("repulse", y.interactivity.events.onclick.mode) && (y.tmp.repulse_finish || (y.tmp.repulse_count++,
        y.tmp.repulse_count == y.particles.array.length && (y.tmp.repulse_finish = !0)),
        y.tmp.repulse_clicking ? (o = Math.pow(y.interactivity.modes.repulse.distance / 6, 3),
        l = y.interactivity.mouse.click_pos_x - e.x,
        v = y.interactivity.mouse.click_pos_y - e.y,
        m = -o / (p = l * l + v * v) * 1,
        p <= o && (b = Math.atan2(v, l),
        e.vx = m * Math.cos(b),
        e.vy = m * Math.sin(b),
        "bounce" == y.particles.move.out_mode && (d = e.x + e.vx,
        u = e.y + e.vy,
        (d + e.radius > y.canvas.w || d - e.radius < 0) && (e.vx = -e.vx),
        (u + e.radius > y.canvas.h || u - e.radius < 0) && (e.vy = -e.vy)))) : 0 == y.tmp.repulse_clicking && (e.vx = e.vx_i,
        e.vy = e.vy_i))
    }
    ,
    y.fn.modes.grabParticle = function(e) {
        var t, a, i, n, s;
        y.interactivity.events.onhover.enable && "mousemove" == y.interactivity.status && (t = e.x - y.interactivity.mouse.pos_x,
        a = e.y - y.interactivity.mouse.pos_y,
        (i = Math.sqrt(t * t + a * a)) <= y.interactivity.modes.grab.distance && (0 < (n = y.interactivity.modes.grab.line_linked.opacity - i / (1 / y.interactivity.modes.grab.line_linked.opacity) / y.interactivity.modes.grab.distance) && (s = y.particles.line_linked.color_rgb_line,
        y.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + n + ")",
        y.canvas.ctx.lineWidth = y.particles.line_linked.width,
        y.canvas.ctx.beginPath(),
        y.canvas.ctx.moveTo(e.x, e.y),
        y.canvas.ctx.lineTo(y.interactivity.mouse.pos_x, y.interactivity.mouse.pos_y),
        y.canvas.ctx.stroke(),
        y.canvas.ctx.closePath())))
    }
    ,
    y.fn.vendors.eventsListeners = function() {
        "window" == y.interactivity.detect_on ? y.interactivity.el = window : y.interactivity.el = y.canvas.el,
        (y.interactivity.events.onhover.enable || y.interactivity.events.onclick.enable) && (y.interactivity.el.addEventListener("mousemove", function(e) {
            var t, a;
            a = y.interactivity.el == window ? (t = e.clientX,
            e.clientY) : (t = e.offsetX || e.clientX,
            e.offsetY || e.clientY),
            y.interactivity.mouse.pos_x = t,
            y.interactivity.mouse.pos_y = a,
            y.tmp.retina && (y.interactivity.mouse.pos_x *= y.canvas.pxratio,
            y.interactivity.mouse.pos_y *= y.canvas.pxratio),
            y.interactivity.status = "mousemove"
        }),
        y.interactivity.el.addEventListener("mouseleave", function(e) {
            y.interactivity.mouse.pos_x = null,
            y.interactivity.mouse.pos_y = null,
            y.interactivity.status = "mouseleave"
        })),
        y.interactivity.events.onclick.enable && y.interactivity.el.addEventListener("click", function() {
            if (y.interactivity.mouse.click_pos_x = y.interactivity.mouse.pos_x,
            y.interactivity.mouse.click_pos_y = y.interactivity.mouse.pos_y,
            y.interactivity.mouse.click_time = (new Date).getTime(),
            y.interactivity.events.onclick.enable)
                switch (y.interactivity.events.onclick.mode) {
                case "push":
                    y.particles.move.enable || 1 == y.interactivity.modes.push.particles_nb ? y.fn.modes.pushParticles(y.interactivity.modes.push.particles_nb, y.interactivity.mouse) : 1 < y.interactivity.modes.push.particles_nb && y.fn.modes.pushParticles(y.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    y.fn.modes.removeParticles(y.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    y.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    y.tmp.repulse_clicking = !0,
                    y.tmp.repulse_count = 0,
                    y.tmp.repulse_finish = !1,
                    setTimeout(function() {
                        y.tmp.repulse_clicking = !1
                    }, 1e3 * y.interactivity.modes.repulse.duration)
                }
        })
    }
    ,
    y.fn.vendors.densityAutoParticles = function() {
        var e, t, a;
        y.particles.number.density.enable && (e = y.canvas.el.width * y.canvas.el.height / 1e3,
        y.tmp.retina && (e /= 2 * y.canvas.pxratio),
        t = e * y.particles.number.value / y.particles.number.density.value_area,
        (a = y.particles.array.length - t) < 0 ? y.fn.modes.pushParticles(Math.abs(a)) : y.fn.modes.removeParticles(a))
    }
    ,
    y.fn.vendors.checkOverlap = function(e, t) {
        for (var a = 0; a < y.particles.array.length; a++) {
            var i = y.particles.array[a]
              , n = e.x - i.x
              , s = e.y - i.y;
            Math.sqrt(n * n + s * s) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * y.canvas.w,
            e.y = t ? t.y : Math.random() * y.canvas.h,
            y.fn.vendors.checkOverlap(e))
        }
    }
    ,
    y.fn.vendors.createSvgImg = function(n) {
        var e = y.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function(e, t, a, i) {
            return n.color.rgb ? "rgba(" + n.color.rgb.r + "," + n.color.rgb.g + "," + n.color.rgb.b + "," + n.opacity + ")" : "hsla(" + n.color.hsl.h + "," + n.color.hsl.s + "%," + n.color.hsl.l + "%," + n.opacity + ")"
        })
          , t = new Blob([e],{
            type: "image/svg+xml;charset=utf-8"
        })
          , a = window.URL || window.webkitURL || window
          , i = a.createObjectURL(t)
          , s = new Image;
        s.addEventListener("load", function() {
            n.img.obj = s,
            n.img.loaded = !0,
            a.revokeObjectURL(i),
            y.tmp.count_svg++
        }),
        s.src = i
    }
    ,
    y.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(y.fn.drawAnimFrame),
        a.remove(),
        pJSDom = null
    }
    ,
    y.fn.vendors.drawShape = function(e, t, a, i, n, s) {
        var r = n * s
          , c = n / s
          , o = 180 * (c - 2) / c
          , l = Math.PI - Math.PI * o / 180;
        e.save(),
        e.beginPath(),
        e.translate(t, a),
        e.moveTo(0, 0);
        for (var v = 0; v < r; v++)
            e.lineTo(i, 0),
            e.translate(i, 0),
            e.rotate(l);
        e.fill(),
        e.restore()
    }
    ,
    y.fn.vendors.exportImg = function() {
        window.open(y.canvas.el.toDataURL("image/png"), "_blank")
    }
    ,
    y.fn.vendors.loadImg = function(e) {
        var t, a;
        y.tmp.img_error = void 0,
        "" != y.particles.shape.image.src ? "svg" == e ? ((t = new XMLHttpRequest).open("GET", y.particles.shape.image.src),
        t.onreadystatechange = function(e) {
            4 == t.readyState && (200 == t.status ? (y.tmp.source_svg = e.currentTarget.response,
            y.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
            y.tmp.img_error = !0))
        }
        ,
        t.send()) : ((a = new Image).addEventListener("load", function() {
            y.tmp.img_obj = a,
            y.fn.vendors.checkBeforeDraw()
        }),
        a.src = y.particles.shape.image.src) : (console.log("Error pJS - No image.src"),
        y.tmp.img_error = !0)
    }
    ,
    y.fn.vendors.draw = function() {
        "image" == y.particles.shape.type ? "svg" == y.tmp.img_type ? y.tmp.count_svg >= y.particles.number.value ? (y.fn.particlesDraw(),
        y.particles.move.enable ? y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw) : cancelRequestAnimFrame(y.fn.drawAnimFrame)) : y.tmp.img_error || (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw)) : null != y.tmp.img_obj ? (y.fn.particlesDraw(),
        y.particles.move.enable ? y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw) : cancelRequestAnimFrame(y.fn.drawAnimFrame)) : y.tmp.img_error || (y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw)) : (y.fn.particlesDraw(),
        y.particles.move.enable ? y.fn.drawAnimFrame = requestAnimFrame(y.fn.vendors.draw) : cancelRequestAnimFrame(y.fn.drawAnimFrame))
    }
    ,
    y.fn.vendors.checkBeforeDraw = function() {
        "image" == y.particles.shape.type ? "svg" == y.tmp.img_type && null == y.tmp.source_svg ? y.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(y.tmp.checkAnimFrame),
        y.tmp.img_error || (y.fn.vendors.init(),
        y.fn.vendors.draw())) : (y.fn.vendors.init(),
        y.fn.vendors.draw())
    }
    ,
    y.fn.vendors.init = function() {
        y.fn.retinaInit(),
        y.fn.canvasInit(),
        y.fn.canvasSize(),
        y.fn.canvasPaint(),
        y.fn.particlesCreate(),
        y.fn.vendors.densityAutoParticles(),
        y.particles.line_linked.color_rgb_line = hexToRgb(y.particles.line_linked.color)
    }
    ,
    y.fn.vendors.start = function() {
        isInArray("image", y.particles.shape.type) ? (y.tmp.img_type = y.particles.shape.image.src.substr(y.particles.shape.image.src.length - 3),
        y.fn.vendors.loadImg(y.tmp.img_type)) : y.fn.vendors.checkBeforeDraw()
    }
    ,
    y.fn.vendors.eventsListeners(),
    y.fn.vendors.start()
};
function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, i) {
        return t + t + a + a + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}
function clamp(e, t, a) {
    return Math.min(Math.max(e, t), a)
}
function isInArray(e, t) {
    return -1 < t.indexOf(e)
}
Object.deepExtend = function(e, t) {
    for (var a in t)
        t[a] && t[a].constructor && t[a].constructor === Object ? (e[a] = e[a] || {},
        arguments.callee(e[a], t[a])) : e[a] = t[a];
    return e
}
,
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}
,
window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
window.pJSDom = [],
window.particlesJS = function(e, t) {
    "string" != typeof e && (t = e,
    e = "particles-js"),
    e = e || "particles-js";
    var a = document.getElementById(e)
      , i = "particles-js-canvas-el"
      , n = a.getElementsByClassName(i);
    if (n.length)
        for (; 0 < n.length; )
            a.removeChild(n[0]);
    var s = document.createElement("canvas");
    s.className = i,
    s.style.width = "100%",
    s.style.height = "100%",
    null != document.getElementById(e).appendChild(s) && pJSDom.push(new pJS(e,t))
}
,
window.particlesJS.load = function(a, e, i) {
    var n = new XMLHttpRequest;
    n.open("GET", e),
    n.onreadystatechange = function(e) {
        var t;
        4 == n.readyState && (200 == n.status ? (t = JSON.parse(e.currentTarget.response),
        window.particlesJS(a, t),
        i && i()) : (console.log("Error pJS - XMLHttpRequest status: " + n.status),
        console.log("Error pJS - File config not found")))
    }
    ,
    n.send()
}
;
