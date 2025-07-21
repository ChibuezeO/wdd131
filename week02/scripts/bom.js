const button = document.querySelector('button');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const list = document.querySelector('______');
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);

        list.append(li);

    }

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    input.value = '';
    input.focus();

});