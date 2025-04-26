(function ($) {
    "use strict";

    var initSlider = function () {
        var swiper = new Swiper(".main-swiper", {
            slidesPerView: 1,
            spaceBetween: 80,
            speed: 700,
            loop: true,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        $('.product-carousel').each(function () {
            var sectionId = $(this).attr('id');
            var swiper = new Swiper("#" + sectionId + ".swiper", {
                slidesPerView: 5,
                spaceBetween: 20,
                navigation: {
                    nextEl: "#" + sectionId + " .swiper-next",
                    prevEl: "#" + sectionId + " .swiper-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        }
                    },
                    999: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1366: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                },
            });
        })

        var swiper = new Swiper(".testimonial-swiper", {
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        var swiper = new Swiper(".review-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: ".icon-arrow-right",
                prevEl: ".icon-arrow-left",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // product single page
        $('.product-thumbnail-slider').each(function () {
            var dir = $(this).attr('data-direction') ? $(this).attr('data-direction') : 'horizontal';
            var num = $(this).attr('data-num') ? $(this).attr('data-num') : 3;

            var thumb_slider = new Swiper(".product-thumbnail-slider", {
                slidesPerView: num,
                spaceBetween: 20,
                direction: dir,
                breakpoints: {
                    0: {
                        direction: "horizontal"
                    },
                    992: {
                        direction: dir
                    },
                },
            });

            var large_slider = new Swiper(".product-large-slider", {
                slidesPerView: 1,
                // autoplay: true,
                spaceBetween: 0,
                effect: 'fade',
                thumbs: {
                    swiper: thumb_slider,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });

        });


        $('.swiper-carousel').each(function () {
            var swiper = new Swiper(".swiper-carousel", {
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-carousel .swiper-next',
                    prevEl: '.swiper-carousel .swiper-prev',
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    300: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
            });
        });

        $('.swiper-slideshow').each(function () {
            var swiper = new Swiper(".swiper-slideshow", {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 700,
                loop: true,
                navigation: {
                    nextEl: '.swiper-slideshow .swiper-next',
                    prevEl: '.swiper-slideshow .swiper-prev',
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        });


    };

    // input spinner
    var initQuantitySpinner = function () {

        $('.product-qty').each(function () {

            var $el_product = $(this);
            var quantity = 0;

            $el_product.find('.quantity-right-plus').click(function (e) {
                e.preventDefault();
                var quantity = parseInt($el_product.find('#quantity').val());
                $el_product.find('#quantity').val(quantity + 1);
            });

            $el_product.find('.quantity-left-minus').click(function (e) {
                e.preventDefault();
                var quantity = parseInt($el_product.find('#quantity').val());
                if (quantity > 0) {
                    $el_product.find('#quantity').val(quantity - 1);
                }
            });

        });

    }

    // init jarallax parallax
    var initJarallax = function () {
        jarallax(document.querySelectorAll(".jarallax"));

        jarallax(document.querySelectorAll(".jarallax-keep-img"), {
            keepImg: true,
        });
    }

    var initGLightbox = function () {
        var lightbox = GLightbox();

        lightbox.on('open', (target) => {
            console.log('lightbox opened');
        });
        var lightboxDescription = GLightbox({
            selector: '.glightbox2'
        });
        var lightboxVideo = GLightbox({
            selector: '.glightbox3'
        });
        lightboxVideo.on('slide_changed', ({ prev, current }) => {
            console.log('Prev slide', prev);
            console.log('Current slide', current);

            const { slideIndex, slideNode, slideConfig, player } = current;

            if (player) {
                if (!player.ready) {
                    // If player is not ready
                    player.on('ready', (event) => {
                        // Do something when video is ready
                    });
                }

                player.on('play', (event) => {
                    console.log('Started play');
                });

                player.on('volumechange', (event) => {
                    console.log('Volume change');
                });

                player.on('ended', (event) => {
                    console.log('Video ended');
                });
            }
        });

    }

    $(document).ready(function () {

        initJarallax();
        initQuantitySpinner();
        initSlider();
        initGLightbox();

        AOS.init({
            duration: 1200,
            once: true,
        })

        $('.navbar').on('click', '.search-toggle', function (e) {
            var selector = $(this).data('selector');

            $(selector).toggleClass('show').find('.search-input').focus();
            // $(selector).find('.autocomplete').focus();
            $(this).toggleClass('active');

            e.preventDefault();
        });

        // close when click off of container
        $(document).on('click touchstart', function (e) {
            if (!$(e.target).is('.search-toggle, .search-toggle *, .navbar, .navbar *')) {
                $('.search-toggle').removeClass('active');
                $('.navbar').removeClass('show');
            }
        });

        // $('.main-slider').each(function () {

        //   $('.main-slider').slick({
        //     autoplay: false,
        //     autoplaySpeed: 2000,
        //     arrows: true,
        //     dots: true,
        //   });

        // });

        // $('.products-slider').each(function () {

        //   $('.products-slider').slick({
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     autoplay: false,
        //     autoplaySpeed: 2000,
        //     dots: true,
        //     responsive: [
        //       {
        //         breakpoint: 600,
        //         settings: {
        //           slidesToShow: 2,
        //           slidesToScroll: 1
        //         }
        //       },
        //       {
        //         breakpoint: 480,
        //         settings: {
        //           slidesToShow: 2,
        //           slidesToScroll: 1
        //         }
        //       }
        //       // You can unslick at a given breakpoint now by adding:
        //       // settings: "unslick"
        //       // instead of a settings object
        //     ]
        //   });
        // });

        // $('.testimonial-slider').each(function () {

        //   $('.testimonial-slider').slick({
        //     dots: true,
        //     arrows: false,
        //     infinite: true,
        //     speed: 500,
        //   });

        // });

    });
    // document ready

    document.addEventListener("DOMContentLoaded", function () {
        const cartItemsContainer = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
        const cartIcon = document.querySelector(".shopping-cart a");
        let cartBadge = document.querySelector(".cart-badge");

        // Ensure the cart badge exists
        if (!cartBadge) {
            cartBadge = document.createElement("span");
            cartBadge.className = "cart-badge";
            cartBadge.textContent = "0";
            cartIcon.appendChild(cartBadge);
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage

        // Add item to cart
        function addToCart(name, price, image) {
            console.log("Debugging addToCart - Original Image Path:", image); // Debugging log
            const correctedImage = image.startsWith("http") || image.startsWith("/") || image.startsWith("./") ? image : `./${image}`;
            console.log("Debugging addToCart - Corrected Image Path:", correctedImage); // Debugging log

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image: correctedImage, quantity: 1 });
            }
            updateCartUI();
            saveCartToLocalStorage();
            triggerFlyingAnimation(correctedImage);
        }

        // Trigger flying animation
        function triggerFlyingAnimation(imageSrc) {
            const flyingImage = document.createElement("img");
            flyingImage.src = imageSrc;
            flyingImage.className = "flying-image";
            document.body.appendChild(flyingImage);

            const cartRect = cartIcon.getBoundingClientRect();
            flyingImage.style.left = `${cartRect.left + cartRect.width / 2}px`;
            flyingImage.style.top = `${cartRect.top + cartRect.height / 2}px`;

            setTimeout(() => {
                flyingImage.remove();
                updateCartBadge();
            }, 1000); // Animation duration
        }

        // Update cart badge
        function updateCartBadge() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? "block" : "none";
        }

        // Use event delegation for "Add to Cart" buttons
        document.body.addEventListener("click", function (event) {
            if (event.target.closest(".btn-cart")) {
                event.stopPropagation(); // Prevent dropdown from closing
                const button = event.target.closest(".btn-cart");
                const name = button.getAttribute("data-name");
                const price = parseInt(button.getAttribute("data-price").replace('.', '')); // Convert "20.000" to 20000
                const image = button.getAttribute("data-image");
                console.log("Debugging button click - Name:", name, "Price:", price, "Image:", image); // Debugging log
                addToCart(name, price, image);
            }
        });

        // Update cart UI
        function updateCartUI() {
            cartItemsContainer.innerHTML = "";
            let total = 0;

            cart.forEach((item, index) => {
                total += item.price * item.quantity;

                const listItem = document.createElement("li");
                listItem.className = "list-group-item d-flex align-items-center gap-3";
                listItem.style.fontFamily = "'Poppins', sans-serif"; // Updated font

                listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1" style="font-family: 'Poppins', sans-serif;">${item.name}</h6>
                    <small class="text-muted" style="font-family: 'Poppins', sans-serif;">Rp ${item.price.toLocaleString()}</small>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-outline-secondary btn-sm" onclick="decreaseQuantity(${index})" style="font-family: 'Poppins', sans-serif;">-</button>
                    <span style="font-family: 'Poppins', sans-serif;">${item.quantity}</span>
                    <button class="btn btn-outline-secondary btn-sm" onclick="increaseQuantity(${index})" style="font-family: 'Poppins', sans-serif;">+</button>
                </div>
                <span class="text-muted" style="font-family: 'Poppins', sans-serif;">Rp ${(item.price * item.quantity).toLocaleString()}</span>
                <button class="btn btn-link text-danger p-0" onclick="removeFromCart(${index})">
                    <svg class="close" width="24" height="24">
                        <use xlink:href="#trash"></use>
                    </svg>
                </button>
            `;

                cartItemsContainer.appendChild(listItem);
            });

            cartTotal.textContent = `Rp ${total.toLocaleString()}`;
            updateCartBadge();
        }

        // Increase quantity
        function increaseQuantity(index) {
            cart[index].quantity++;
            updateCartUI();
            saveCartToLocalStorage();
        }

        // Decrease quantity
        function decreaseQuantity(index) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                updateCartUI();
                saveCartToLocalStorage();
            }
        }

        // Remove item from cart
        function removeFromCart(index) {
            cart.splice(index, 1); // Remove the item at the specified index
            updateCartUI(); // Update the cart UI
            saveCartToLocalStorage(); // Save the updated cart to localStorage
        }

        // Expose removeFromCart globally
        window.removeFromCart = removeFromCart;

        // Expose functions globally
        window.increaseQuantity = increaseQuantity;
        window.decreaseQuantity = decreaseQuantity;

        // Save cart to localStorage
        function saveCartToLocalStorage() {
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        // Load cart UI on page load
        updateCartUI();

        // Save cart to localStorage when navigating to checkout
        document.getElementById("checkout").addEventListener("click", function (event) {
            if (cart.length === 0) {
                event.preventDefault();
                alert("Your cart is empty. Please add items to proceed.");
            } else {
                saveCartToLocalStorage();
            }
        });



        // Handle checkout confirmation
        document.getElementById("confirmCheckout").addEventListener("click", function () {
            fetch("new.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cart),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert("Order placed successfully!");
                        localStorage.removeItem("cart"); // Clear cart
                        window.location.href = "index.html"; // Redirect to homepage
                    } else {
                        alert("Failed to place order. Please try again.");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    alert("An error occurred. Please try again.");
                });
        });

        // Example buttons for adding items to cart
        const exampleButton1 = document.createElement("button");
        exampleButton1.className = "btn-cart";
        exampleButton1.setAttribute("data-name", "Redvelvet Cookies");
        exampleButton1.setAttribute("data-price", "15.000");
        exampleButton1.setAttribute("data-image", "barang1.jpg");

        const exampleButton2 = document.createElement("button");
        exampleButton2.className = "btn-cart";
        exampleButton2.setAttribute("data-name", "Black Forest Pastry");
        exampleButton2.setAttribute("data-price", "20.000");
        exampleButton2.setAttribute("data-image", "cake-item1.jpg");

        document.body.appendChild(exampleButton1);
        document.body.appendChild(exampleButton2);
    });

})(jQuery);