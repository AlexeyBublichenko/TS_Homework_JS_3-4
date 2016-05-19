// Homework_JS_3-4-Alexey Bublichenko
var objTest = {
	name: 'Тест по программированию',
	counterQ: 0,
	questions: [	{	text: 'Вопрос №1',
						answers: [	{	text: 'Вариант ответа №1',
										correct: true	},
									{	text: 'Вариант ответа №2',
										correct: false	},
									{	text: 'Вариант ответа №3',
										correct: false	}
								]
					},
					{	text: 'Вопрос №2',
						answers: [	{	text: 'Вариант ответа №1',
										correct: true	},
									{	text: 'Вариант ответа №2',
										correct: false	},
									{	text: 'Вариант ответа №3',
										correct: false	}
								]
					},
					{	text: 'Вопрос №3',
						answers: [	{	text: 'Вариант ответа №1',
										correct: true	},
									{	text: 'Вариант ответа №2',
										correct: false	},
									{	text: 'Вариант ответа №3',
										correct: false	}
								]
					}
				],
	buttonName: 'Проверить мои результаты',

	createMyElement: function(tagStr, classStr, innerStr) {
		elem = document.createElement(tagStr);
		elem.classList.add(classStr); 
		elem.innerHTML = innerStr;
		return elem;
	},

	generateAnswers: function(num) {
		var fragment = this.createMyElement('div','temporary','');

		this.counterQ++;
		var p = this.createMyElement('p', 'question__text', this.counterQ + '. ' + this.questions[num].text);
		fragment.appendChild(p);

		for (var i = 0; i < this.questions[num].answers.length; i++) {
			var label = this.createMyElement('label', 'answer', '');

			var input = this.createMyElement('input', 'answer__checkbox', '');
			input.type = 'checkbox';
			input.id = 'q' + this.counterQ + '-a' + (i+1);
			label.appendChild(input);

			var span = this.createMyElement('span', 'answer__text', this.questions[num].answers[i].text);
			label.appendChild(span);

			fragment.appendChild(label);
		};
		return fragment;
	},

	generateQuestions: function() {
		var fragment = this.createMyElement('div','temporary','');

		var h2 = this.createMyElement('h2', 'test__name', this.name);
		fragment.appendChild(h2);

		for (var i = 0; i < this.questions.length; i++) {
			var fieldset = this.createMyElement('fieldset','question',this.generateAnswers(i).innerHTML );
			fragment.appendChild(fieldset);
		};

		var input = this.createMyElement('input','submit-button','');
		input.type = 'submit';
		input.value = this.buttonName;
		fragment.appendChild(input);
		return fragment;
	},

	generateForm: function() {
		var form = this.createMyElement('form', 'test', this.generateQuestions().innerHTML );
		form.action = '#';
		form.method = 'POST';
		return form;
	},

	create: function() {
		var body = document.body;
		var wrapper = this.createMyElement('div', 'wrapper', this.generateForm().outerHTML );
		body.insertBefore(wrapper, body.firstChild);
	}
};

objTest.create();