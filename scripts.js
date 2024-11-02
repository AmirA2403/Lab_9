        $(document).ready(function() {
            // Filter buttons click event
            $(".filter-btn").click(function() {
                let category = $(this).attr("data-category");
                
                if (category === "all") {
                    $(".gallery-item").show();
                } else {
                    $(".gallery-item").hide();
                    $(`.gallery-item[data-category="${category}"]`).show();
                }
                $(".gallery-item").removeClass("active");
                $(".gallery-item:visible").first().addClass("active");
            });

            // Lightbox feature
            $("#gallery-section").on("click", ".gallery-item img", function() {
                let imgSrc = $(this).attr("src");
                $("#lightbox-img").attr("src", imgSrc);
                $("#lightbox-overlay").fadeIn();
            });

            // Close lightbox
            $("#close-lightbox").click(function() {
                $("#lightbox-overlay").fadeOut();
            });

            // Navigate through images in lightbox
            $("#prev-arrow, #next-arrow").click(function() {
                let currentImg = $("#lightbox-img");
                let currentSrc = currentImg.attr("src");
                let currentItem = $(`.gallery-item img[src="${currentSrc}"]`).parent();
                let newItem;

                if ($(this).is("#next-arrow")) {
                    newItem = currentItem.nextAll('.gallery-item:visible').first();
                    if (newItem.length === 0) {
                        newItem = $('.gallery-item:visible').first();
                    }
                } else if ($(this).is("#prev-arrow")) {
                    newItem = currentItem.prevAll('.gallery-item:visible').first();
                    if (newItem.length === 0) {
                        newItem = $('.gallery-item:visible').last();
                    }
                }

                let newSrc = newItem.find("img").attr("src");
                currentImg.attr("src", newSrc);
            });

            // Initial active image for category
            $(".gallery-item:visible").first().addClass("active");

            // Hover effect for gallery items
            $("#gallery-section").on("mouseover", ".gallery-item", function() {
                $(".gallery-item").removeClass("active");
                $(this).addClass("active");
            });
        });
   