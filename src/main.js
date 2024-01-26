var dialog = document.querySelector('dialog');
            document.querySelector(
                '#openDialog'
            ).onclick = function () {
                dialog.showModal();
            };
            document.querySelector(
                '#closeDialog'
            ).onclick = function () {
                dialog.close();
            };