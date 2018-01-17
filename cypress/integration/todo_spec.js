describe("To do test", () => {

    const todos = ["todo-1", "todo-2"];

	it("adds a todo list entry", () => {
        cy
            .visit("/")
            .get("[data-test=input-add-todo]").type(todos[0])
            .get("[data-test=button-add-todo]").click()
            .get("[data-test=list-item-0]").should('contain', todos[0]);
    });
    
    it("filters out completed entries when clicking active", () => {
        cy
            .get("[data-test=list-item-0] [data-test=checkbox-0]").click()
            .get("[data-test=input-add-todo]").type(todos[1])
            .get("[data-test=button-add-todo]").click()
            .get("[data-test=filter-active]").click()
            .get("[data-test=todo-list]").should('not.contain', todos[0])
            .get("[data-test=todo-list]").should('contain', todos[1]);
    });
    
    it("filters out not completed entries when clicking completed", () => {
        cy
            .get("[data-test=filter-completed]").click()
            .get("[data-test=todo-list]").should('contain', todos[0])
            .get("[data-test=todo-list]").should('not.contain', todos[1]);
    });
    
    it("filters out none when clicking all", () => {
        cy
            .get("[data-test=filter-all]").click()
            .get("[data-test=todo-list]").should('contain', todos[0])
            .get("[data-test=todo-list]").should('contain', todos[1]);
	});
})
