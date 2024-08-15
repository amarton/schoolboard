<script>
import {
      Dropdown,
      DropdownItem,
      DropdownMenu,
      DropdownToggle
    } from '@sveltestrap/sveltestrap';
  </script>
  
  
  <!-- Start container -->
  <div class="container">

    <p class="hed">Board of Education Voter Guide</p>
    <p class="byline">By The Local News Network</p>

    <p class="intro-text"><span class="dropcap">W</span>ith schools in Maryland facing issues ranging from pandemic-related learning losses to safety, voters will go to the polls Nov. 8 to vote for their local Board of Education. For that reason, the Local News Network at the University of Maryland's Philip Merrill College of Journalism sent a questionnaire to all 155 school board candidates to get their views on important issues. The results are compiled below in the Capital News Service Board of Education Voter Guide. Select a county to view candidates and their responses. Read about our methodology

    <p class="chapter-head"><a name="chapter"> Select a county to view Board of Education candidates: </a></p>

    <!-- when a link is clicked, the county name is passed in the url to counties/[counties]-->
    <div class="row">
      <div class="col-md-3">
        <a href="counties/Allegany+County	">
            <button type="button" class="btn btn-primary btn-lg">Allegany County	</button>
        </a>
      </div>

      <div class="col-md-3">
        <a href="counties/Charles+County">
            <button type="button" class="btn btn-primary btn-lg">Charles County</button>
      </a>
    </div>

    <div class="col-md-3">
      <a href="counties/Carroll+County">
        <button type="button" class="btn btn-primary btn-lg">Carroll County</button>
      </a>
    </div>

    <div class="col-md-3">
      
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>Anne Arundel County</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+1">
                District 1
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+2">
                District 2
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+3">
                District 3
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+4">
                District 4
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+5">
                District 5
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+6">
                District 6
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Anne+Arundel+County+District+7">
                District 7
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </div>

    </div>


    <div class="row">
      <div class="col-md-3">
        <a href="counties/Frederick+County">
            <button type="button" class="btn btn-primary btn-lg">Frederick County</button>
        </a>
      </div>

      <!--
      <div class="col-md-3">
        <a href="counties/Charles+County">
            <button type="button" class="btn btn-primary btn-lg">x</button>
      </a>
    </div>

    <div class="col-md-3">
      <a href="counties/Baltimore+County">
        <button type="button" class="btn btn-primary btn-lg">x</button>
      </a>
    </div>

    <div class="col-md-3">
      
        <Dropdown size="lg">
          <DropdownToggle color="primary" caret>x</DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+1">
                District 1
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="counties/Prince+George's+County+District+2">
                District 2
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </div>
-->
    </div>

  </div>
  <!-- close container -->

  

<style>
  .row {padding-top:25px;}
</style>