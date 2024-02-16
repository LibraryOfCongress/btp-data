# Instructions for publishing notebooks

This page will document how to edit and publish these notebooks to [Github Pages](https://LibraryOfCongress.github.io/btp-data/).

## Pre-requisites

You will need at least [Git](https://git-scm.com/) and [Python](https://www.python.org/) installed on your machine.

And you will need read and write access to [the Github repository](https://github.com/LibraryOfCongress/btp-data) unless you are forking this repository to your own.

## Steps

1. Clone this repository to your local machine

    ```
    git clone https://github.com/LibraryOfCongress/btp-data.git
    cd btp-data
    ```

2. Install Python module dependencies

    ```
    pip install -r requirements.txt
    ```

3. Run the Jupyter Notebooks (e.g. `jupyter notebook` or in your favorite IDE) in order 2 to 5. Make any changes you'd like and make sure the output is as expected.

4. Once you made your changes, now you can build the Jupyter Notebook HTML

    ```
    jupyter-book build .
    ```

5. Once built, you should be able to paste the file path (e.g. `file://path/to/btp-data/_build/html/index.html`) displayed in the output into your browser bar to preview it.  Make any changes necessary and re-run steps 3 and 4.

6. Once you are ready to publish, commit and push your changes to the main branch

    ```
    git push origin main
    ```

    And then push the generated HTML subfolder to the gh-pages branch

    ```
    git subtree push --prefix _build/html origin gh-pages
    ```

    This should trigger an automatic re-build of the changed Github Pages webpages.  You should be able to see the status of those builds in the ["Actions"](https://github.com/LibraryOfCongress/btp-data/actions) section of the repository. And once deployed, view the final result on [Github Pages](https://LibraryOfCongress.github.io/btp-data/).